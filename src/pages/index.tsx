import React from "react"
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"

import Hero from "../components/home/hero"
import Navbar from "../components/layout/navbar/home"

interface HomePageProps extends InferGetServerSidePropsType<GetServerSideProps> {
  data: string
}

const HomePage: NextPage<HomePageProps> = ({ data }) => {
  return (
    <>
      <Navbar />
      <Hero />
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
