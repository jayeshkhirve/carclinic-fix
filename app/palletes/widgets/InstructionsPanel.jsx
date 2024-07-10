import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['700']
})

const roboto2 = Roboto({
    subsets: ['latin'],
    weight: ['400'],
    
})






export default function InstructionsPanel() {

    return (
        <>
            <Divider />
            <Box sx={{ py: 8 }}>

                <Container maxWidth={'xl'}>
                    <Grid container spacing={4}>
                        <Grid item xl={4}>
                            <Box justifyContent="center"
                                alignItems="center" display={'flex'} flexDirection={'column'}>
                                <Image src='/home/instruction-card-1.svg' width={50} height={50} />

                                <Typography className={roboto.className} mt={3} fontSize={14}>Qualified assistance</Typography>
                                <Typography style={{textAlign: 'center', lineHeight: 1.8}} className={roboto2.className} mt={2} fontSize={14}>Our PDF and video tutorials draw on the many years of experience of our professional technicians. This information will help you replace parts and consumables on your vehicle yourself. Learn all the secrets of successful, quick and inexpensive car repair and maintenance.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={4}>
                            <Box justifyContent="center"
                                alignItems="center" display={'flex'} flexDirection={'column'}>
                                <Image src='/home/instruction-card-2.svg' width={50} height={50} />

                                <Typography className={roboto.className} mt={3} fontSize={14}>Free access</Typography>
                                <Typography style={{textAlign: 'center', lineHeight: 1.8}} className={roboto2.className} mt={2} fontSize={14}>Over 20710 PDF instructions and more than 3612 video tutorials on replacing parts and consumables are available to all registered users absolutely free of charge. Specific design features of various car units and assemblies, the ins and outs of installation and removal, a list of all the tools, materials and accessories needed for repair–you no longer need to waste time searching for all this useful information from different websites.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={4}>
                            <Box justifyContent="center"
                                alignItems="center" display={'flex'} flexDirection={'column'}>
                                <Image src='/home/instruction-card-3.svg' width={50} height={50} />

                                <Typography className={roboto.className} mt={3} fontSize={14}>Convenient format</Typography>
                                <Typography style={{textAlign: 'center', lineHeight: 1.8}} className={roboto2.className} mt={2} fontSize={14}>High quality videos, detailed illustrations for each step in the PDF instructions–everything is informative, simple and clear. Add the replacement methods you liked the best to your favourites for easy access. Get all the information you need in one click</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
