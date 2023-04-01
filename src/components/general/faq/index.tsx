import React from "react"

import faqs from "../../../data/faq.data.json"

const FAQ = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
        <div>
          <div className="max-w-2xl">
            <p className="text-4xl text-black">Frequent questions and answers</p>
            <p className="mt-4 max-w-2xl text-lg tracking-tight text-gray-600">
              Because we wonder all day around
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 w-full text-left">
          <div className="relative m-auto items-center gap-12 md:order-first lg:inline-flex">
            <div className="mx-auto p-4 lg:max-w-7xl lg:p-0">
              <ul role="list" className="grid list-none grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-12">
                {faqs.map((faq, index) => (
                  <li key={faq.id}>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        {faq.question}
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">{faq.answer}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
