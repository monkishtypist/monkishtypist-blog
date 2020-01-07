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
