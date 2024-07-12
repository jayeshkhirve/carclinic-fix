import { Box, Container, Grid, Typography } from '@mui/material'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import LargeButton from './sub_widgets/LargeButton'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['700']

})

export default function NotificationSection() {
    return (
        <Box sx={{ py: 4 }}>
            <Box display={'flex'} justifyContent={'center'} sx={{ position: 'relative', }}>

                <Box sx={{ position: 'absolute', backgroundColor: '#152329', top: 20, width: '100%', height: 196, zIndex: 0 }}>
                    hsdudiueisied
                </Box >

                <Container maxWidth={'xl'} sx={{ zIndex: 100, position: 'absolute' }}>
                    <Grid container sx={{}} columnSpacing={2}>
                        <Grid item xl={4} lg={4}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ position: 'absolute' }}>
                                    <Image src='/home/icon_man_1.svg' width={240} height={216} />
                                </Box>

                                <Box sx={{ position: 'absolute', left: 170 }} >
                                    <Image src='/home/icon_man_2.svg' width={240} height={216} />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xl={5} lg={5}>
                            <Grid container columnSpacing={4}>
                                <Grid item xs={12} xl={12}>
                                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
                                        <Typography color={'#fff'} className={montserrat.className} sx={{ fontSize: 20, mt: 6 }}>Want to get more useful information?</Typography>
                                        <Typography color={'#ababab'} sx={{ fontSize: 14, mt: 1 }}>Ask questions or share your repair experience on the car forum. Subscribe to updates so you don't miss out on new guides.</Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={6} xl={6} justifyContent={'center'} justifyItems={'center'} display={'flex'}>
                                    <LargeButton fullwidth={true} px={4} mt={2}>ASK On The Forum</LargeButton>
                                </Grid>

                                <Grid item xs={6} xl={6} justifyContent={'center'} justifyItems={'center'} display={'flex'}>
                                    <LargeButton fullwidth={true} px={4} mt={2}>ASK On The Forum</LargeButton>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item xl={3} lg={3}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ position: 'absolute' }}>
                                    <Image src='/home/icon_mailbox.svg' width={374} height={216} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>




                </Container >


            </Box>
        </Box >

    )
}
