"use client"
import React, { useEffect } from 'react'

const page = () => {
    useEffect(()=> {
        throw new Error("Something Went Wrong")
    },[])
  return (
    <div>page</div>
  )
}

export default page