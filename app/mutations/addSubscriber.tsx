import db from "db"
import * as z from "zod"
import sendEmailWithTemplate from "mailers/sendEmailwithTemplate"

// Validate data
const subscriberInfo = z.object({
  email: z.string(),
  betaTester: z.boolean(),
})

export default async function addSubscriber(input: z.infer<typeof subscriberInfo>) {
  const data = subscriberInfo.parse(input)

  const subscriber = await db.subscribers.create({ data })

  // Save the metadata to Algolia
  const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN
  const msg = {
    From: "hello@postreview.org",
    To: subscriber.email,
    TemplateAlias: subscriber.betaTester ? "sub-beta-tester" : "sub-no-tester",
    TemplateModel: {
      product_url: process.env.PUBLIC_URL,
      product_name: "PostReview",
      support_email: "hello@postreview.org",
      company_name: "PostReview",
      unsubscribe_url: `${origin}/unsubscribe?=${subscriber.email}`,
    },
  }

  await sendEmailWithTemplate(msg)

  return subscriber
}
