---
slug: "filter-gatsby-content-by-date"
date: "2019-12-31"
title: "Filtering Gatsby Source Content by Publish Date"
tags: ["Gatsby", "Contentful", "data manipulation"]
---

I had a not-so-unusual problem the other day while working on another Gatsby/Contentful blog. I needed a way to set a _publish on_ date for posts, and then filter said posts such that content with a future publish date would not be compiled into the blog until said date.

In theory this should have been a very simple solution. However, while Contentful supports scheduled publishing, the source plugin `gatsby-source-contentful` does not recognize publish dates. In fact [the Contentful API does not support this feature yet][1] either, so the data wouldn't be available anyway.

Therefore to tackle the first problem, we need something that we can access in our GraphQL query. To do this we create a _Publish Date_ field in Contentful for our Post content type. We can then set this field equal to the date we have scheduled for our post. Now when Contentful publishes our post, it can also trigger a webhook to Netlify to deploy our site with the newly published content. Plus we can now access this data in `gatsby-node.js` and sort by our publish date in descending order.

__gatsby-node.js__
```JavaScript
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(
          sort: { fields: [publishDate], order: DESC }
        ) {
          edges {
            node {
              title
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges
      const postsPerFirstPage = config.postsPerHomePage
      const postsPerPage = config.postsPerPage
      const numPages = Math.ceil(
        posts.slice(postsPerFirstPage).length / postsPerPage
      )
      resolve()
    })
  })
  return Promise.all([loadPosts])
}
```

The next part is a little bit trickier - filtering out posts scheduled in the future. You might be asking why we would need to filter out posts that haven't been published yet and therefore have not even triggered a deploy. In fact you might even say something like:
> Why would we need to filter out posts that haven't been published yet, if they have not even triggered a deploy?

To wit I say, "what happens if you need to deploy another change in the meantime?" The new problem is that our source plugin `gatsby-source-contentful` doesn't check the publish status of our Contentful content, and will attempt to include this content during build. So if for example we need to update a few styles or add a new component, when we attempt to build and deploy these updates they will include these _future_ posts. Therefore we still need to filter these out.

Fortunately we can use schema customization in Gatsby to achieve this functionality, as noted in [this comment on GitHub][2]. Just add the following to `gatsby-node.js` before our previous query:

__gatsby-node.js__
```JavaScript
exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'ContentfulPost',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean!',
          resolve: source => new Date(source.publishDate) > new Date(),
        }
      }
    })
  ])
}
```

And then we can use our new schema to filter our previous query like so:

__gatsby-node.js__
```JavaScript
graphql(`
  {
    allContentfulPost(
      filter: { isFuture: { eq: false } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          publishDate
        }
      }
    }
  }
`)
```

Now any posts with a `publishDate` set in the future will not be included in our build.

[1]: https://www.contentfulcommunity.com/t/api-for-scheduled-publishing/3087
[2]: https://github.com/gatsbyjs/gatsby/issues/17159#issuecomment-549091641
