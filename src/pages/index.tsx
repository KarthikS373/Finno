import React from "react"
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
