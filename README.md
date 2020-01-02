# Monkishtypist Blog

Welcome to my blog. This site is built with Gatsby and uses markdown files for post content. Since my intention is not only blog posts, but also to save some of my favorite code snippets as well, I wanted something that read like an email client therefore making post navigation easier.

## Installation

Feel free to fork this repository and make it your own.

See the [Gatsby Quickstart][quickstart] guide.

```console
$ yarn install
```

### Environment Variables

You will need to create the following `.env` files for passing environment data during build:
- `.env.development` for local development variables
- `.env.gh-pages` for GitHub Pages variables
- `.env.production` for production environments - however we are using GitHub Pages for our production environment, so this `.env` files isn't currently used

## Develop: Starting the Development Environment

```console
$ yarn run develop
```
or...
```console
$ gatsby develop
```

Then browse to [localhost:8000][localhost]

## Deploy: GitHub Pages

There is an in-depth article on setting up this site on GitHub Pages [here][gh-pages]. Everything is already set up in this repository for you to deploy to GitHub Pages. You just need to update your `pathPrefix` in `gatsby-config.js` like so:
```javascript
pathPrefix: `/reponame`,
```
If however you are using a custom domain then leave `pathPrefix` empty:
```javascript
pathPrefix: ``,
```

Then to deploy the site to GitHub pages run:
```console
$ yarn run deploy
```

This will execute the commend `GATSBY_ACTIVE_ENV=gh-pages gatsby build --prefix-paths && gh-pages -d public` which will set our environment vars, build our Gatsby files, and push everything to GitHub Pages branch.

From there browse to `http:your-github-username.github.io/reponame` to preview the site.

## Components and Features

### Contact Form

This site uses a contact form connected to Formspree. You can read an introduction to building contact forms in Gatsby [here][building-a-contact-form].

However, in this case we created out own form component that uses state to show a simple thank you message on submit. You can view the complete component source here: [src/components/contactForm.js][contactForm].

We use an environment variable for the POST action. This is both for security as well as using different forms for different environments. You should then add the following environment variables:

```text
GATSBY_FORMSPREE_ENDPOINT=https://formspree.io/myendpoint
```
And change `myendpoint` to your form's custom endpoint.

---
## This Site Powered By
<a href="https://www.gatsbyjs.org">
  <img src="https://www.gatsbyjs.org/Gatsby-Monogram.svg" width=52 />
</a>

<a href="https://github.com">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="60" />
</a>

[localhost]: http://localhost:8000/
[quickstart]: https://www.gatsbyjs.org/docs/quick-start/
[gh-pages]: https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/
[building-a-contact-form]: https://www.gatsbyjs.org/docs/building-a-contact-form/#formspree
[contactForm]: src/components/contactForm.js
