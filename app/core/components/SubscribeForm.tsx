import React, { useState } from "react"
import { Formik } from "formik"
import addSubscriber from "app/mutations/addSubscriber"
import { useMutation } from "blitz"
import { BsArrowRightCircle } from "react-icons/bs"

export const SubscribeForm = () => {
  const [subscribeMutation] = useMutation(addSubscriber)
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {submitted ? (
        "Thanks for subscribing!"
      ) : (
        <>
          <div>Subscribe to receive updates:</div>
          <Formik
            initialValues={{ email: "", betaTester: false }}
            validate={(values) => {
              const errors = {} as any
              if (!values.email) {
                errors.email = "Required"
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address"
              }

              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              subscribeMutation(values).finally(() => {
                setSubmitted(true)
              })
              setTimeout(() => {
                setSubmitting(false)
              }, 400)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="my-4 flex sm:flex-row flex-col gap-2">
                  <input
                    className="border-b-2 focus:outline-none py-1 px-5 bg-black text-white border-none"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <button className="bg-[#94EC01] hover:bg-[#619801] active:bg-[#94EC01] text-[#545454] px-5 py-1">
                    Subscribe <BsArrowRightCircle className="inline self-center" />
                  </button>
                </div>
                <div id="beta-test-container" className="flex flex-row items-center gap-2 mx-3">
                  <input
                    type="checkbox"
                    id="beta-tester"
                    name="betaTester"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.betaTester}
                  />
                  <label htmlFor="beta-tester">
                    I&apos;m also interested in becoming a beta tester
                  </label>
                </div>
              </form>
            )}
          </Formik>
        </>
      )}
    </>
  )
}
