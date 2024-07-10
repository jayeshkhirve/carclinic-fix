import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Montserrat, Roboto } from 'next/font/google';
import React from 'react'
import LargeButton from './sub_widgets/LargeButton';


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600']
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400']
})


export default function ProfileAssistantSection() {
    return (
        <>
            <Box sx={{ pt: 8, pb: 6, mt: 6 }} style={{ background: '#152329 url(https://cdn.club.autodoc.de/assets/img/instruction/sections/schedule/bg-schedule-section.jpg) no-repeat 100% 0;' }}>
                <Container maxWidth={'xl'}>
                    <Grid container>
                        <Grid item xl={3} lg={3} xs={12} sm={12} >
                            <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} alignItems={'center'}>
                                <img src='https://cdn.club.autodoc.de/assets/img/instruction/sections/schedule/img-clock.svg' />
                            </Box>

                        </Grid>
                        <Grid item xl={9} lg={9}>
                            <Box sx={{ textAlign: { sm: 'center', xl: 'left', lg: 'left', xs: 'center' } }} >
                                <Typography color={'white'} className={montserrat.className} fontSize={20}>Your profile is your personal assistant.</Typography>
                                <Typography sx={{ mt: 1, fontSize: 14 }} color={'#c4c8c9'} className={roboto.className}>It can track car expenses, keep a car log and replacement schedule, and save favourite materials, notes and documents</Typography>
                            </Box>

                            <Grid container columnSpacing={2} rowSpacing={1} sx={{ mt: 1 }}>
                                <Grid item xl={3} xs={12}>
                                    <Box sx={{ textAlign: { sm: 'center', xl: 'left', lg: 'left', xs: 'center' } }} >
                                        <LargeButton fullwidth={true} mt={1} px={6} extra={{ sm: 48, xs: 48 }}>Login OR Register</LargeButton>
                                    </Box>
                                </Grid>
                                <Grid item xl={3} xs={12}>
                                    <Box sx={{ textAlign: { sm: 'center', xl: 'left', lg: 'left', xs: 'center',  } }} >
                                        <Button variant='contained' fullWidth={true} sx={{ backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0'}, height: 48, mt: 1, px: 6  }} >Try The Demo</Button>
                                        
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </>
    )
}
