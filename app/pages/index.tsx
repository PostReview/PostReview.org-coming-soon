import { useEffect, useState } from "react"
import { Image, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import logo from "public/logo.png"
import { BsArrowRightCircle, BsTwitter, BsFillEnvelopeFill, BsDiscord } from "react-icons/bs"

const Home: BlitzPage = () => {
  const targetDate = new Date("2022-09-01 EST")
  const countDownDate = new Date(targetDate).getTime()

  const [countDown, setcountDown] = useState(countDownDate - new Date().getTime())
  // Update the date
  useEffect(() => {
    const interval = setInterval(() => {
      setcountDown(countDownDate - new Date().getTime())
    }, 1000) // Refresh after every 1 sec

    return () => clearInterval(interval)
  }, [countDownDate])

  const getCurrentDateValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  const currentDateValues = getCurrentDateValues(countDown)

  return (
    <div className="h-screen flex flex-col items-center  text-slate-800">
      <main className="flex-grow flex flex-col items-center justify-center mx-4">
        <div className="flex flex-row items-center my-8">
          <div
            id="tagline"
            className="text-3xl font-bold max-w-sm text-transparent bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text"
          >
            Start your new academic year differently with PostReview
          </div>
          <div id="logo">
            <Image src={logo} alt="PostReview.org" />
          </div>
        </div>
        <div id="benefits" className="flex flex-col gap-4 w-full">
          <div>
            <h1 className="text-xl font-bold">Save time </h1>
            <div>Find highly-rated articles quickly</div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Share your opinions </h1>
            <div>Rate the articles you liked or disliked</div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Stay connected </h1>
            <div>Stay up-to-date with what your colleagues are reading</div>
          </div>
        </div>
        <div
          id="signup"
          className="my-8 p-4 rounded-lg bg-gradient-to-tr from-orange-600 to-blue-600 text-white"
        >
          <div>Subscribe to receive updates:</div>
          <div className="my-4">
            <input
              className="border-b-2 mx-3 focus:outline-none py-1 px-5"
              type="text"
              placeholder="Email"
            />
            <button className="bg-blue-400 text-white px-5 py-1 rounded-md">
              Subscribe <BsArrowRightCircle className="inline self-center" />
            </button>
          </div>
          <div id="beta-test-container" className="flex flex-row items-center gap-2 mx-3">
            <input type="checkbox" id="beta-tester" />
            <label htmlFor="beta-tester">I&apos;m also interested in becoming a beta tester</label>
          </div>
        </div>
        <div id="countdown" className="my-8">
          <h1 className="text-xl font-bold">Launching on September 1st, 2022</h1>
          <div id="timer" className="flex flex-row gap-4 mt-4">
            <div>
              <span className="text-7xl">{currentDateValues.days}</span> days
            </div>
            <div>
              <span className="text-7xl">{currentDateValues.hours}</span> hours
            </div>
            <div>
              <span className="text-7xl">{currentDateValues.minutes}</span> minutes
            </div>
            <div>
              <span className="text-7xl w-full">{currentDateValues.seconds}</span> seconds
            </div>
          </div>
        </div>
        <div id="social-icons" className="flex flex-row text-3xl gap-8 my-12 mb-48">
          <a href="https://twitter.com/PostReviewOrg" target={"_blank"} rel="noreferrer">
            <BsTwitter />
          </a>
          <a href="mailto:hello@postreview.org">
            <BsFillEnvelopeFill />
          </a>
          <a href="https://discord.gg/HSGk2j2pZM" target={"_blank"} rel="noreferrer">
            <BsDiscord />
          </a>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
