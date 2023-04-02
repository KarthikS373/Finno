import React, { useEffect } from "react"
import axios from "axios"
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"

import FAQ from "../components/general/faq"
import Testimonials from "../components/general/testimonials"
import Features from "../components/home/features"
import Hero from "../components/home/hero"
import Footer from "../components/layout/footer"
import Navbar from "../components/layout/navbar/home"

interface HomePageProps extends InferGetServerSidePropsType<GetServerSideProps> {
  data: string
}

const HomePage: NextPage<HomePageProps> = ({ data }) => {
  useEffect(() => {
    axios
      .post(`http://localhost:3000/api/v1/send-sms`, {
        name: "Sumit Raj",
        to: "",
        message: "Hello Karthik. This is from Finno",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async () => {
  const data = "" // TODO: Data fetching from CockroachDB

  return {
    props: {
      data: data,
    },
  }
}
