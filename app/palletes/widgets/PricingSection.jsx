import { Box, Button, Card, Chip, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Switch, Typography } from '@mui/material'
import React from 'react'
import { Montserrat } from "next/font/google";
import { styled } from '@mui/styles';
import IOSSwitch from './IOSSwitch';
import CheckIcon from '@mui/icons-material/Check';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500']
});

const montserrat2 = Montserrat({
    subsets: ['latin'],
    weight: ['400']
});

const montserrat3 = Montserrat({
    subsets: ['latin'],
    weight: ['700']
});

const texts = [
    "50,000 Visitors*",
    "Create Unlimited Widgets",
    "All Widget Types",
    "3rd Party Integrations",
    "Advanced Targeting",
    "2 Websites"
]

export default function PricingSection() {
    return (
        <>
            <Container maxWidth={'xl'} sx={{ mt: 12, mb: 8 }}>
                <Typography className={montserrat.className} variant="h3" sx={{ fontSize: '36px', textAlign: 'center' }}> Choose your plan</Typography>
                <Typography className={montserrat2.className} color={'#ababab'} variant='h6' sx={{ fontSize: '18px', textAlign: 'center', mt: 3 }}>14 days unlimited free trial. No contract or credit card required.</Typography>

                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ mt: 8 }}>
                    <Stack direction={'row'} spacing={2}>
                        <Typography className={montserrat2.className} variant='h6' sx={{ textAlign: 'center', }}>Monthly</Typography>
                        <IOSSwitch />
                        <Typography className={montserrat2.className} variant='h6' sx={{ textAlign: 'center', opacity: 1 }}>Yearly</Typography>
                        <Chip label="20 % OFF" color="secondary" variant="outlined" />
                    </Stack>
                </Box>

                <Box display={'flex'} justifyItems={'center'} alignItems={'center'} sx={{ mt: 6 }}>

                    <Grid container justifyContent="center" columnSpacing={2} rowSpacing={2}>
                        <Grid item xl={3} sx={{mt: {lg: 5, xl: 5, md: 5, sm: 0, xs: 0} }}>
                            <Card variant="outlined" sx={{ textAlign: 'center', pt: 6, pb: 3, px: 3, borderRadius: 4 }}>
                                <Typography className={montserrat2.className} variant='h6' >Essential</Typography>
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ mt: 2, }}>
                                    <Typography className={montserrat3.className} variant='h4' sx={{}} >₹0</Typography>
                                    <Typography sx={{ ml: 1, fontSize: 14, fontWeight: 550 }} color={'#ababab'}>/ MONTH</Typography>
                                </Box >

                                <List sx={{ mt: 4 }}>
                                    {texts.map(text => {
                                        return (
                                            <ListItem key={Math.random()}>
                                                <ListItemIcon sx={{ minWidth: '38px' }}>
                                                    <CheckIcon fontSize='small' sx={{ color: '#006AD3' }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={text}
                                                />
                                            </ListItem>
                                        )
                                    })}
                                </List>
                                <Button variant="conatianed" fullWidth sx={{ backgroundColor: '#006AD3', height: '48px', color: 'white', mt: {xl: 24, lg: 24, md: 24, sm: 6, xs: 6}, borderRadius: 2 }} >
                                Subscribe
                                </Button>
                            </Card>
                        </Grid>

                        <Grid item xl={3}>
                            <Card  sx={{ textAlign: 'center', borderRadius: 4, backgroundColor: '#152329' }}>
                                <Box sx={{ backgroundColor: '#006AD3', py: 1 }}>
                                    <Typography color={'white'} sx={{fontSize: '14px'}}>MOST POPULAR</Typography>
                                </Box>
                                <Box sx={{ pt: 6, pb: 3, px: 3 }}>

                                    <Typography className={montserrat2.className} variant='h6' color={'white'}>Pro</Typography>
                                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ mt: 2, }}>
                                        <Typography className={montserrat3.className} variant='h4' sx={{}} color={'white'}>₹499</Typography>
                                        <Typography sx={{ ml: 1, fontSize: 14, fontWeight: 550 }} color={'#ababab'}>/ MONTH</Typography>
                                    </Box >

                                    <List sx={{ mt: 4 }}>
                                        {texts.map(text => {
                                            return (
                                                <ListItem key={Math.random()}>
                                                    <ListItemIcon sx={{ minWidth: '38px' }}>
                                                        <CheckIcon fontSize='small' sx={{ color: '#006AD3' }} />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={text}
                                                        primaryTypographyProps={{ style: {color: 'white'} }}
                                                        color={'white'}
                                                    />
                                                </ListItem>
                                            )
                                        })}
                                    </List>
                                    <Button variant="conatianed" fullWidth sx={{ backgroundColor: '#006AD3', height: '48px', color: 'white', mt: {xl: 24, lg: 24, md: 24, sm: 6, xs: 6}, borderRadius: 2 }} >
                                    Subscribe
                                    </Button>
                                </Box>

                            </Card>
                        </Grid>

                        <Grid item xl={3} sx={{mt: {lg: 5, xl: 5, md: 5, sm: 0, xs: 0} }}>
                            <Card variant="outlined" sx={{ textAlign: 'center', pt: 6, pb: 3, px: 3, borderRadius: 4 }}>
                                <Typography className={montserrat2.className} variant='h6' >Essential</Typography>
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ mt: 2, }}>
                                    <Typography className={montserrat3.className} variant='h4' sx={{}} >₹699</Typography>
                                    <Typography sx={{ ml: 1, fontSize: 14, fontWeight: 550 }} color={'#ababab'}>/ MONTH</Typography>
                                </Box >

                                <List sx={{ mt: 4 }}>
                                    {texts.map(text => {
                                        return (
                                            <ListItem key={Math.random()}>
                                                <ListItemIcon sx={{ minWidth: '38px' }}>
                                                    <CheckIcon fontSize='small' sx={{ color: '#006AD3' }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={text}
                                                />
                                            </ListItem>
                                        )
                                    })}
                                </List>
                                <Button variant="conatianed" fullWidth sx={{ backgroundColor: '#006AD3', height: '48px', color: 'white', mt: {xl: 24, lg: 24, md: 24, sm: 6, xs: 6}, borderRadius: 2 }} >
                                    Subscribe
                                </Button>
                            </Card>
                        </Grid>

                    </Grid>

                </Box>
            </Container>
        </>
    )
}
