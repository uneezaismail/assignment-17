"use client"
import React from 'react'
import Form from '../components/Form'
import Link from 'next/link'

const ReactHookForm = () => {
  return (
    <div className='flex min-h-screen py-24 flex-col items-center justify-between mx-4 max-w-md sm:mx-auto'>
        <Form/>
        <Link href={"/"} className='bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900'>Back</Link>
    </div>
  )
}

export default ReactHookForm