import React from 'react'
import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

const MainLayout = () => {
  return (
    <>
    <Toaster position='top-center' />
    {/* <Header /> */}
    <Outlet />
    {/* <Footer /> */}
    </>
  )
}

export default MainLayout