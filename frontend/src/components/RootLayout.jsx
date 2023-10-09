import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from './MainNavigation'

const RootLayout = () => {
  return (
    <>
    <MainNavigation/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default RootLayout