---
slug: "adding-formspree-to-gatsby"
date: "2020-01-07"
title: "Adding Formspree Forms to Gatsby"
tags: ["Gatsby", "Formspree", "forms"]
---

There are plenty of options when it comes to [contact forms on Gatsby](https://www.gatsbyjs.org/docs/building-a-contact-form/), and after trying several I settled on [Formspree](https://formspree.io/) for the following reasons:

1. It's simple
1. Their free-tier plan is generous
1. And form submissions end up in my inbox

And when I say their free plan is generous, I mean you get _unlimited forms_, and _50 form submissions per form per month_. Those are some great features for a free plan, especially considering other services generally only offer a trial period, or the free form submissions count against a total and do not reset each month.

So now that I settled on my form service provider, it was time to get implementing.

I started by following the implementation documentation on [GatsbyJS.org](https://www.gatsbyjs.org/docs/building-a-contact-form/). I set up my form in Formspree, adjusted the settings and removed reCAPTCHA. Then I started building out my `contactForm` in Gatsby:

__contactForm.js__
```javascript
const ContactForm = () => {
  return (
    <form action="https://formspree.io/myendpoint" method="POST">
      <label for="name">Name
        <input type="text" name="name" />
      </label>
      <label for="email">Email
        <input type="email" name="email" />
      </label>
      <label for="message">Message
        <textarea name="message" />
      </label>
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
```

Simple enough.

Then I decided to add a little more. And when you create a form in Formspree, there is a great example React snippet which includes using State to show a _thank you_ message on successful form submit. The React snippet looks like this:

```javascript
import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/myendpoint"
        method="POST"
      >
        <!-- add your custom form HTML here -->
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <input type="text" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
```

As you can see from the example, we would use a `submitForm()` function to handle our submission and set the State. We then use this State in our `render()` function to show either the submit button, or a custom message on success or error.

I like this example and decided to use it for my own form. However I didn't feel it was _Gatsby_ enough, so I made a few changes. I'll break down all my changes below, but here is what the final component looks like:

__contactForm.js__
```javascript
import React, { useState } from "react"
import styled from 'styled-components'

const HiddenInput = styled.input`
  height: 0;
  position: absolute;
  visibility: hidden;
  width: 0;
`

const ContactForm = ({ className }) => {
  const [status, setStatus] = useState()
  const action = process.env.GATSBY_FORMSPREE_ENDPOINT

  function submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR")
      }
    }
    xhr.send(data)
  }

  return (
    <form
      onSubmit={submitForm}
      action={action}
      method="POST"
      className={`${className || ''}`}
    >
      <label for="name">Name
        <input type="text" name="name" />
      </label>
      <label for="email">Email
        <input type="email" name="email" />
      </label>
      <label for="message">Message
        <textarea name="message" />
      </label>
      <HiddenInput type="text" name="_gotcha"/>
      {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  )
}

export default ContactForm
```

First off, I wanted to add a honeypot since we removed reCAPTCHA. So following [this article](https://help.formspree.io/hc/en-us/articles/360013580813-Honeypot-spam-filtering) I added the honeypot field:

```html
<input type="text" name="_gotcha" style="display:none" />
```

But I'm no fan of inline CSS, especially on reusable components, so I used `styled-components` to create a new custom component for the honeypot field and styled it accordingly:

```javascript
const HiddenInput = styled.input`
  height: 0;
  position: absolute;
  visibility: hidden;
  width: 0;
`
```
```html
<HiddenInput type="text" name="_gotcha"/>
```

Then I moved the form action out of the component and into environment variables. This allows me to use different forms for different environments and keep my data pure. To achieve this I added the following to the `contactForm.js` component:

```javascript
const action = process.env.GATSBY_FORMSPREE_ENDPOINT
```

And I added the endpoint variable to `.env.production` like so:

```text
GATSBY_FORMSPREE_ENDPOINT=https://formspree.io/myendpoint
```

I also added endpoint variables to `.env.development` and `.env.gh-pages` since I am running my site on GitHub Pages.

Lastly, I update how functions and State are handled and rewrote everything inside a single constant getting the final code above.

Example State changes:
```javascript
const [status, setStatus] = useState()
```

Oh, and I also added the `{ className }` prop to the component so that I can use custom styling and `styled-components` when calling my `contactForm.js` component. This way I can reuse the form component, and style it any way I want without having to overwrite existing CSS.

And that's it. Now I have a fully functional contact form at [https://monkishtypist.com/contact](https://monkishtypist.com/contact) that sends me an email with the form data every time the form is submitted.

Couldn't be any easier.
