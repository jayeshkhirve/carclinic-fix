import { Box, Button, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import CheckIcon from '@mui/icons-material/Check';
import MainSectionHeader from './sub_widgets/MainSectionHeader';


const texts = [
    "Use AUTODOC's manuals for DIY replacement of car parts and consumables and save on repair shop services.",
    "Explore over 20710 PDF replacement manuals compiled by our specialists.",
    "Get practical information on car parts installation with detailed step-by-step instructions and photos.",
    "Save manuals in your Favourites for easy access.",
    "Share files with your friends."
]

export default function PhoneSection() {
    return (
        <Box>
            <Container maxWidth={'xl'}>

                <MainSectionHeader title={'Professional replacement manuals'} subTitle={'Make use of our years of professional experience to repair your car.'}/>


                <Grid container spacing={2} sx={{ mt: 4, mb: 8 }}>
                    <Grid item lg={6}>
                        <Box display={'flex'} justifyContent={'right'} alignItems={'right'} alignContent={'right'}>
                            <Image src='/home/section-6-phone.png' width={373} height={746} />
                        </Box>
                    </Grid>

                    <Grid item lg={6}>
                        <List sx={{ mt: 4 }}>
                            {texts.map(text => {
                                return (
                                    <ListItem key={Math.random()}>
                                        <ListItemIcon>
                                            <CheckIcon fontSize='small' sx={{ color: '#006AD3' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={text}
                                        />
                                    </ListItem>
                                )
                            })}
                        </List>

                        <Button variant="conatianed"  sx={{ml: 9, px: 6, backgroundColor: '#006AD3', height: '48px', color: 'white' }} >
                            GO TO Tutrials
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
