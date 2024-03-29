import { useEffect, useState } from "react"
import { Image, BlitzPage, Head } from "blitz"
import Layout from "app/core/layouts/Layout"
import logo from "public/logo.png"
import { BsTwitter, BsFillEnvelopeFill, BsDiscord } from "react-icons/bs"
import { SubscribeForm } from "app/core/components/SubscribeForm"
import { SocialMetadata } from "app/core/components/SocialMetadata"

const Home: BlitzPage = () => {
  const targetDate = new Date("2022-09-01")
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
    <div className="flex flex-col items-center text-white bg-zinc-800">
      <Head>
        <SocialMetadata />
      </Head>
      <main className="flex-grow flex flex-col items-center justify-center mx-4">
        <div className="flex md:flex-row flex-col items-center my-8">
          <div id="tagline" className="text-4xl font-bold max-w-sm">
            Start your new academic year <span className="text-[#94EC01]">differently</span> with
            PostReview
          </div>
          <div id="logo">
            <Image src={logo} width={350} height={350} alt="PostReview.org" />
          </div>
        </div>
        <div id="benefits" className="flex flex-col gap-4 w-full">
          <div>
            <h1 className="text-xl font-bold">Save time </h1>
            <div>Find highly-rated scholarly articles quickly</div>
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
          className="mb-8 mt-16 p-4 bg-gradient-to-b from-zinc-400 to-zinc-800 text-white"
        >
          <SubscribeForm />
        </div>
        <div id="countdown" className="my-8 font-mono">
          <h1 className="text-xl font-bold">Launching on September 1st, 2022</h1>
          <div id="timer" className="flex flex-row gap-4 mt-4">
            <div>
              <span className="font-bold md:text-7xl text-2xl">{currentDateValues.days}</span> days
            </div>
            <div>
              <span className="font-bold md:text-7xl text-2xl">{currentDateValues.hours}</span>{" "}
              hours
            </div>
            <div>
              <span className="font-bold md:text-7xl text-2xl">{currentDateValues.minutes}</span>{" "}
              minutes
            </div>
            <div>
              <span className="font-bold md:text-7xl text-2xl">{currentDateValues.seconds}</span>{" "}
              seconds
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
Home.getLayout = (page) => <Layout title="PostReview">{page}</Layout>

export default Home
