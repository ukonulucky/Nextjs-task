import React from 'react'
import Footer from 'components/footer'
import Head from 'next/head'

function About() {
 
  return (
    <div>
      <Head>
        <meta name='description' content='this page is the about page of my blog' />
        <title>this is the Home page</title>
  </Head>
      <h2>About Page</h2>
    </div>
  )
}

export default About

About.getLayout = function getLayout(pages) {
  return (
    <div >
        { pages }
    <Footer />
  </div>
  )
  
}