"use client"
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const Authprovider = ({children}) => {
  return (
    <ClerkProvider>
        {children}
    </ClerkProvider>
  )
}

export default Authprovider