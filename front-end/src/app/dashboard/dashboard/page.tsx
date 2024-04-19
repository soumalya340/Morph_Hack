"use client"
import Nav3 from '@/components/common/Nav/nav3'
import React from 'react'

const page = () => {
  return (
    <div>
      <Nav3 />
      <div className='flex justify-center items-center h-screen '
        style={{ background: "#BDE3F0" }}>
        <a href="/dashboard/crowdfunding-events">
          <button className='ant-btn css-1g853jt ant-btn-default border-solid border-2 border-sky-500 p-3 bg-white'> Crowdfunding Events</button>
        </a>
        <a href="/dashboard/started-events">
          <button className='ant-btn css-1g853jt ant-btn-default border-solid border-2 border-sky-500 p-3 bg-white'>Started Events</button>
        </a>
      </div>
    </div>
  )
}

export default page