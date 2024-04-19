"use client"
import Nav3 from '@/components/common/Nav/nav3'
import React from 'react'

const page = () => {
  return (
    <div>
      <Nav3/>
      <div className='flex justify-center items-center h-screen ' style={{background: "#BDE3F0"}}>
        <button type='button' className='ant-btn css-1g853jt ant-btn-default border-solid border-2 border-sky-500 p-3 bg-white'>
          <span>Create you own Community</span>
        </button>
    </div>
    </div>
  )
}

export default page