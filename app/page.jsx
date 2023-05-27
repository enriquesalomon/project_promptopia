import Feed from '@components/Feed';
// import React from 'react'

function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Shout-out for Friends & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> Friend Shout-out</span>
      </h1>
      <p className='desc text-center'>
        Friend Shout-out is an open-source prompting tool for individual looking for friends, create and share
      </p>

      <Feed />
    </section>
  )
}

export default Home