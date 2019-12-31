# Gatsby Blog

## Installation

See the [Gatsby Quickstart][1] guide.

[![Netlify Status](https://api.netlify.com/api/v1/badges/1b35fbfa-389e-4655-87b5-964c88fd1398/deploy-status)](https://app.netlify.com/sites/serene-euler-988cd5/deploys)

### Note on `npm` vs `yarn`

Due to errors with `npm` and `package-lock.json` we are using `yarn` instead. Just a heads up.

## Develop: Starting the Development Environment

```bash
yarn run develop
```
or...
```bash
gatsby develop
```

Then browse to [localhost:8000][localhost]

## Deploy: GitHub Pages (Staging)

To deploy the site to GitHub pages run:
```bash
yarn run deploy
```

This will execute the commend `GATSBY_ACTIVE_ENV=gh-pages gatsby build --prefix-paths && gh-pages -d public` which will set our environment vars, build our Gatsby files, and then push them to GitHub Pages branch.

From there browse to [monkishtypist.github.io/littlefinchmedia][3] to preview the site.

To learn more, see the article ["How Gatsby Works with GitHub Pages"][2].

## Deploy: Netlify (Production)

To deploy to production, simply `git push origin master` and Netlify will build and serve our site.

---
## Powered By
<a href="https://www.gatsbyjs.org">
  <img src="https://www.gatsbyjs.org/Gatsby-Monogram.svg" width=52 />
</a>

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg" />
</a>

<a href="https://github.com">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="60" />
</a>

[localhost]: http://localhost:8000/
[1]: https://www.gatsbyjs.org/docs/quick-start/
[2]: https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/
[3]: https://monkishtypist.github.io/gatsby-blog/
