'use client'

import { Autocomplete, Avatar, Box, Button, Card, Container, Grid, Paper, Popper, TextField, Typography, styled } from "@mui/material";
import Home2AppBar from "../palletes/AppBars/Home2AppBar";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Montserrat } from 'next/font/google'
import Image from "next/image";
import { makeStyles } from '@mui/styles'
import theme from "../wrapers/theme";
import InstallAppSection from "../palletes/widgets/InstallAppSection";
import Home2Footer from "../palletes/widgets/Home2Footer";
import InstructionsPanel from "../palletes/widgets/InstructionsPanel";
import PhoneSection from "../palletes/widgets/PhoneSection";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400']
});



const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        backgroundColor: 'white', // Change background color
        borderRadius: '4px', // Rounded border,
        // borderTopRightRadius: {xs: 0, sm: 0, md: 0, lg: 0, xl: 0},
        [theme.breakpoints.up('xs')]: {
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
        },
        [theme.breakpoints.up('sm')]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        },
        [theme.breakpoints.up('md')]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        },
        [theme.breakpoints.up('lg')]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        },
        [theme.breakpoints.up('xl')]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        },


        height: '48px',
        '& fieldset': {
            borderColor: '#ccc',
            borderColor: '#ebebeb',
        },
        '&:hover fieldset': {
            borderColor: '#aaa',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        }, '& .MuiInputBase-input': {
            padding: '18.5px 20px', // Adjust the padding to match the new height
        },
    },
}));

const StyledAutocomplete1 = styled(Autocomplete)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        backgroundColor: 'white', // Change background color
        borderRadius: '4px', // Rounded border,

        [theme.breakpoints.up('xs')]: {
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
        },
        [theme.breakpoints.up('sm')]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        [theme.breakpoints.up('md')]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        [theme.breakpoints.up('lg')]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        [theme.breakpoints.up('xl')]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        height: '48px',
        '& fieldset': {
            borderColor: '#ccc',
            borderColor: '#ebebeb',
        },
        '&:hover fieldset': {
            borderColor: '#aaa',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        }, '& .MuiInputBase-input': {
            padding: '18.5px 20px', // Adjust the padding to match the new height
        },
    },
}));



const StyledAutocomplete2 = styled(Autocomplete)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        backgroundColor: 'white', // Change background color
        borderRadius: '4px', // Rounded border,


        [theme.breakpoints.up('xs')]: {
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
        },
        [theme.breakpoints.up('sm')]: {

            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        [theme.breakpoints.up('md')]: {

            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        [theme.breakpoints.up('lg')]: {

            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        [theme.breakpoints.up('xl')]: {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        height: '48px',
        '& fieldset': {
            borderColor: '#ebebeb',
        },
        '&:hover fieldset': {
            borderColor: '#aaa',

        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',

        }, '& .MuiInputBase-input': {
            padding: '18.5px 20px', // Adjust the padding to match the new height
        },
    },
}));



const TypeOptions = [{
    label: 'Trouble Codes',
    value: 'hello'
}, {
    label: 'Wiring Diagram',
    value: 'hello'
}]

const useStyles = makeStyles({
    card: {
        boxShadow: '0 4px 8px rgba (0, 0, 0, 0.2)',
        margin: '10px'
    }, toolbar: theme.mixins.toolbar
})

const CardComponent = ({ text }) => {

    return (
        <>
            <Card elevation={0} sx={{ display: 'flex', direction: 'row', justifyContent: 'center', borderRadius: 1, boxShadow: '0 12px 15px -5px rgba(0, 0, 0, .1)' }}>
                <Box sx={{ mt: 3, paddingX: '10px' }}>
                    <Box sx={{ paddingX: '62px', mb: 2 }}>
                        <Image src={'/test/icon.svg'} width={52} height={52} />
                    </Box>
                    <Box sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }} >
                        <Typography sx={{ mt: 3, mb: 4 }}>{text}</Typography>
                    </Box>
                </Box>
            </Card>

        </>
    )
}

const mList = [{
    text: 'Braked'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}, {
    text: 'Sensors'
}]


const Home2 = () => {
    const classes = useStyles();
    return (
        <>
            <div>
                <Home2AppBar />
                <div className={classes.toolbar}></div>
                <Box sx={{ backgroundColor: '#152329', height: { xs: 60, sm: 60, md: 100, lg: 100, lg: 100 } }}></Box>

                <Box sx={{ backgroundColor: '#152329' }} >
                    <Container maxWidth="xl" sx={{}}>
                        <Box sx={{ display: 'flex', }}>
                            <Avatar variant="rounded" sx={{ bgcolor: '#006AD3', width: 36, height: 36, mt: 0.25 }} >
                                <AccountTreeIcon />
                            </Avatar>

                            <Typography className={montserrat.className} color={"white"} sx={{ fontWeight: 50, ml: 2, fontSize: { xs: 20, sm: 20, md: 30, lg: 30 } }}>Car repair manuals and video guides</Typography>
                        </Box>

                        <Box sx={{}}>
                            <Typography sx={{ mt: 2, fontSize: { xs: 14, sm: 14, md: 16, lg: 16, xl: 16 } }} color={'#ABABAB'}>DIY car repair? Not an issue–with AUTODOC!</Typography>

                            <Grid container sx={{ mt: 5 }} rowSpacing={2}>
                                <Grid item lg={2} xs={12} sm={6}>
                                    <StyledAutocomplete
                                        size="small"
                                        options={TypeOptions}
                                        // PopperComponent={CustomPopper}
                                        sx={{
                                            '& .MuiAutocomplete-popupIndicator': {
                                                color: '#006AD3', // Custom color for the arrow icon
                                            },
                                            '& .MuiAutocomplete-popupIndicatorOpen': {
                                                color: '#006AD3', // Custom color when the dropdown is open
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} placeholder="Type" />}
                                    />
                                </Grid>

                                <Grid item lg={2.5} xs={12} sm={6}>
                                    <StyledAutocomplete1
                                        size="small"
                                        options={TypeOptions}
                                        // PopperComponent={CustomPopper}
                                        sx={{
                                            '& .MuiAutocomplete-popupIndicator': {
                                                color: '#006AD3', // Custom color for the arrow icon
                                            },
                                            '& .MuiAutocomplete-popupIndicatorOpen': {
                                                color: '#006AD3', // Custom color when the dropdown is open
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} placeholder="Make" />}
                                    />
                                </Grid>

                                <Grid item lg={2.5} xs={12} sm={6}>
                                    <StyledAutocomplete1
                                        size="small"
                                        options={TypeOptions}
                                        // PopperComponent={CustomPopper}
                                        sx={{
                                            '& .MuiAutocomplete-popupIndicator': {
                                                color: '#006AD3', // Custom color for the arrow icon
                                            },
                                            '& .MuiAutocomplete-popupIndicatorOpen': {
                                                color: '#006AD3', // Custom color when the dropdown is open
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} placeholder="Model" />}
                                    />
                                </Grid>

                                <Grid item lg={2.5} xs={12} sm={6}>
                                    <StyledAutocomplete2
                                        size="small"
                                        options={TypeOptions}
                                        // PopperComponent={CustomPopper}
                                        sx={{
                                            '& .MuiAutocomplete-popupIndicator': {
                                                color: '#006AD3', // Custom color for the arrow icon
                                            },
                                            '& .MuiAutocomplete-popupIndicatorOpen': {
                                                color: '#006AD3', // Custom color when the dropdown is open
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} placeholder="Year" />}
                                    />
                                </Grid>
                                <Grid item lg={0.5}>
                                </Grid>
                                <Grid item lg={2} xs={12}>
                                    <Button variant="conatianed" fullWidth sx={{ backgroundColor: '#006AD3', height: '48px', color: 'white' }} >
                                        Find
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>

                    </Container>
                </Box>
                <Box sx={{ backgroundColor: '#152329', height: 60 }}>
                </Box>

                <Box sx={{ mt: 6, mb: 6 }}>
                    <Container maxWidth="xl" >
                        <Box sx={{}}>
                            <Typography className={montserrat.className} variant="h6">Free auto repair manuals online</Typography>
                        </Box>

                        <Box sx={{ mt: 4, }}>
                            <Grid container justify="space-around" columnSpacing={3} rowSpacing={6}>
                                {mList.map(obj => {
                                    return (
                                        <Grid item lg={2} xl={2} md={3} sm={4} xs={6} key={Math.random()}>
                                            <CardComponent text={obj.text} />
                                        </Grid>

                                    )
                                })}
                            </Grid>

                        </Box>

                    </Container>
                </Box>

                <Box sx={{ height: 100 }}>

                </Box>

                <PhoneSection />

                <InstructionsPanel />

                <InstallAppSection />

                <Home2Footer />
                {/* <InstallAppSection /> */}

            </div>


        </>
    )
}

export default Home2;