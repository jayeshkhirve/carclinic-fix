import { Box, Card, Link, Typography } from '@mui/material'
import React from 'react'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600']
});


export default function LatestArticle(props) {
    return (
        <>
            <Card variant="outlined" sx={{ px: 2, pt: 2, pb: 3 }} elevation={2}>
                <Box display={'flex'} alignItems={'center'}>
                    <CalendarTodayOutlinedIcon fontSize='small' />
                    <Typography color={'#ababab'} sx={{ml: 2, fontSize: 12}}>{props.date}</Typography>
                </Box>

                <Typography className={montserrat.className} variant='h6' sx={{fontSize: 16, mt: 1}}>{props.title}</Typography>
                <Box sx={{mt: 1}}></Box>
                <Link className={montserrat.className} href={'#'} underline="none" color='#006AD3' fontSize={14}  >View more</Link>
                {/* <Typography className={montserrat.className} variant='h6' sx={{fontSize: 14, mt: 1, color: '#006AD3'}}>View more</Typography> */}
            </Card>
        </>
    )
}
