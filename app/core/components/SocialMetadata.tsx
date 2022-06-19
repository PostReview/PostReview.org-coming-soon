import React from "react"

export const SocialMetadata = () => {
  const title = "PostReview"
  const description = "Start your new academic year differently with PostReview"
  const rootUrl = new URL("https://www.postreview.org/")
  const socialImage = "./social-image.jpg"
  return (
    <>
      <meta name="description" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="postreview.org" />
      <meta property="twitter:url" content={rootUrl.href} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={rootUrl.href} key="ogurl" />
      <meta property="og:image" content={socialImage} key="ogimage" />
      <meta property="og:site_name" content={title} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
    </>
  )
}
