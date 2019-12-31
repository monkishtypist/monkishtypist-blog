import React from "react"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import SEO from "../components/seo"

const AccountPage = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <SEO title="Account" />
      <p>Hello and welcome {user.nickname || "friend"}</p>
      <p>There is nothing to see here at the moment.</p>
    </>
  )
}

export default AccountPage
