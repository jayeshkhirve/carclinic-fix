import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

export default function LogoComponent(props) {

    const {fMax, fMin, iMax, iMin} = props;

    return (
        <Box display={'flex'} {...props}>
            <Avatar src="/logo.png" sx={{ mr: 1, width: { xs: iMin, sm: iMin, md: iMax, lg: iMax }, height: { xs: 28, sm: 28, md: iMax, lg: iMax } }} />
            <Typography variant="h5" color={'white'} sx={{ fontWeight: 650, fontSize: { xs: fMin, sm: fMin, md: fMax, lg: fMax } }} >CARCLINIC </Typography>
            <Typography variant="h5" color='secondary' sx={{ fontWeight: 650, ml: 1, fontSize: { xs: fMin, sm: fMin, md: fMax, lg: fMax } }}> FIX</Typography>
        </Box>
    )
}
