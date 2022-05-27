import db from "db"
import * as z from "zod"

// Validate data
const subscriberInfo = z.object({
  email: z.string(),
})

export default async function removeSubscriber(input: z.infer<typeof subscriberInfo>) {
  const data = subscriberInfo.parse(input)

  const foundUser = await db.subscribers.findFirst({
    where: {
      email: data.email,
    },
  })

  if (foundUser) {
    const subscriber = await db.subscribers.delete({
      where: {
        email: data.email,
      },
    })
    return subscriber
  }
}
