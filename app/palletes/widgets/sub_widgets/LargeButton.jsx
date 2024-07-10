import { Button } from '@mui/material'
import { Roboto } from 'next/font/google'
import React from 'react'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500']
})

export default function LargeButton({ children, mt = 4, px = 10, fullwidth = false, extra = {}, textColor = 'white', color='secondary' }) {
  return (
    <Button className={roboto.className}  fullWidth={fullwidth} variant="contained" color={color} disableElevation sx={{ height: { md: 48, lg: 48, ...extra }, mt, px }} >{children}</Button>
  )
}
