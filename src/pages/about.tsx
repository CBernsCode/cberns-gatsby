import React from "react"
import Layout from "../components/layout"
import { PageProps } from "gatsby"

const About = ({ location }: PageProps) => {
  return (
    <Layout location={location} title="About">
      <p>
        I hope that I am a hard worker that likes to think creatively in code. I
        have been working in JavaScript and more recently TypeScript. Working at
        startups has taught me so much. I will forever be thankful to those who
        helped get me here.
      </p>
    </Layout>
  )
}

export default About
