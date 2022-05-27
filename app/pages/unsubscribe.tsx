import { MdOutlineWavingHand } from "react-icons/md"
import { BlitzPage, useRouterQuery, invoke, Link } from "blitz"
import Layout from "app/core/layouts/Layout"
import removeSubscriber from "app/mutations/removeSubscriber"

const Unsubscribe: BlitzPage = () => {
  const query = useRouterQuery()
  const unsubscribeEmail = query.email

  if (unsubscribeEmail) invoke(removeSubscriber, { email: unsubscribeEmail.toString() })

  return (
    <div className="h-screen flex flex-col items-center  text-slate-800">
      <main className="flex-grow flex flex-col items-center justify-center mx-4">
        <div className="text-5xl mb-4">
          <MdOutlineWavingHand />
        </div>
        <div>You&apos;ve been unsubscribed from our list.</div>
      </main>
      <footer className="my-4">
        <Link href={"/"}>PostReview</Link>
      </footer>
    </div>
  )
}

Unsubscribe.suppressFirstRenderFlicker = true
Unsubscribe.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Unsubscribe
