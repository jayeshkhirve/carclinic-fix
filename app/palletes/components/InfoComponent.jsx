import { Grid, Typography } from '@mui/material'
import { Montserrat } from 'next/font/google';
import Image from 'next/image'
import React from 'react'


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400']
});


export default function InfoComponent({isRight = false}) {
    
    return (
        <Grid container>
            <Grid order={{ xl: isRight ? 2 : 1 }} item xl={6} lg={6} sm={12} xs={12} justifyContent={'center'} justifyItems={'center'} display={'flex'}>
                <Image src={'/home/img-info-1.png'} width={550} height={304} quality={100} />
            </Grid>

            <Grid order={{ xl: isRight ? 1 : 2 }} item xl={6} lg={6} sm={12} xs={12} alignItems={'center'} alignContent={'center'} justifyContent={'center'} justifyItems={'center'} display={'flex'} flexDirection={'column'}>
                <Typography className={montserrat.className} sx={{ fontSize: 30 }}>Planning to do some maintenance work on your vehicle?</Typography>

                <Typography sx={{ mt: 2 }}>Make a list of the spare parts and consumables you need and send it to AUTODOC specialists for review.</Typography>
            </Grid>
        </Grid>
    )
}
