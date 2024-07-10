import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import LogoComponent from "../AppBars/LogoComponent";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { Montserrat } from 'next/font/google'
import Link from "next/link";
import { makeStyles, styled } from "@mui/styles";


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400']
});


const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        backgroundColor: 'white', // Change background color
        borderRadius: '4px', // Rounded border,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        height: '42px',
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


const Home2Footer = () => {

    return (
        <>
            <Box sx={{ backgroundColor: '#152329', pt: 4, pb: 4 }}>
                <Container maxWidth={"xl"} >
                    <Grid container>
                        <Grid item lg={2.5} xl={2.5} sm={6} >
                            <Grid container rowSpacing={12}>
                                <Grid item lg={12} sm={6} xs={12}>
                                    <LogoComponent fMax={24} fMin={18} iMin={18} iMax={28} />

                                </Grid>
                                {/* <Grid item lg={12} sm={6} xs={12}>
                                    <Stack direction={'row'} spacing={2}>
                                        <FacebookIcon color="white" style={{ color: 'white' }} fontSize="medium" />
                                        <YouTubeIcon color="white" style={{ color: 'white' }} fontSize="medium" />
                                        <InstagramIcon color="white" style={{ color: 'white' }} fontSize="medium" />
                                        <XIcon color="white" style={{ color: 'white' }} fontSize="medium" />
                                    </Stack>
                                    <Typography fontSize={12} color={'white'}>
                                        © 2024: https://club.autodoc.co.uk AUTODOC CLUB
                                    </Typography>
                                </Grid> */}


                            </Grid>

                        </Grid>

                        <Grid item lg={2.25} xl={2.25} sm={6} >
                            <Typography className={montserrat.className} color={'white'}>AUTODOC CLUB service</Typography>
                            <Box sx={{
                                mt: 4,
                                '& a': {
                                    color: '#8A9194',
                                    fontSize: '14px'
                                },
                            }}>
                                <Stack spacing={2}>
                                    <Link href={''} color='white'>Company</Link>
                                    <Link href={''} color='white'>Privacy policy</Link>
                                    <Link href={''} color='white'>Terms & conditions</Link>
                                    <Link href={''} color='white'>Cookie settings</Link>
                                </Stack>

                            </Box>

                        </Grid>
                        <Grid item lg={2} xl={2} sm={6} >
                            <Typography className={montserrat.className} color={'white'}>Popular brands</Typography>

                            <Box sx={{
                                mt: 4,
                                '& a': {
                                    color: '#8A9194',
                                    fontSize: '14px'
                                },
                            }}>
                                <Stack spacing={2}>
                                    <Link href={''} color='white'>MERCEDES-BENZ</Link>
                                    <Link href={''} color='white'>BMW</Link>
                                    <Link href={''} color='white'>VW</Link>
                                    <Link href={''} color='white'>FORD</Link>
                                    <Link href={''} color='white'>AUDI</Link>
                                    <Link href={''} color='white'>All car brands</Link>
                                </Stack>

                            </Box>
                        </Grid>
                        <Grid item lg={2.25} xl={2.25} sm={6} >
                            <Typography className={montserrat.className} color={'white'}>Popular categories</Typography>

                            <Box sx={{
                                mt: 4,
                                '& a': {
                                    color: '#8A9194',
                                    fontSize: '14px'
                                },
                            }}>
                                <Stack spacing={2}>
                                    <Link href={''} color='white'>Filters</Link>
                                    <Link href={''} color='white'>Brake System</Link>
                                    <Link href={''} color='white'>Suspension and Arms</Link>
                                    <Link href={''} color='white'>Engine</Link>
                                    <Link href={''} color='white'>Windscreen Cleaning System</Link>
                                    <Link href={''} color='white'>Car maintenance</Link>
                                    <Link href={''} color='white'>Popular Categories</Link>
                                    <Link href={''} color='white'>Fault codes</Link>
                                    <Link href={''} color='white'>Price check</Link>
                                </Stack>

                            </Box>
                        </Grid>
                        <Grid item lg={3} xl={3} sm={6} >
                            <Typography className={montserrat.className} color={'white'}>Subscribe to our news and updates.</Typography>

                            <Box sx={{
                                mt: 4,
                                '& a': {
                                    color: '#8A9194',
                                    fontSize: '14px'
                                },
                            }}>

                                <Box display={'flex'}>
                                    <StyledTextField
                                        placeholder="Email"
                                    />
                                    <Button sx={{ backgroundColor: '#006AD3', borderBottomLeftRadius: 0, borderTopLeftRadius: 0, fontSize: 12 }} variant="contained">Subscribe</Button>


                                </Box>
                                <Stack direction={'row'} spacing={1} mt={2}>
                                    <Typography color='#8A9194' fontSize={13}>Please note our </Typography>
                                    <Box sx={{
                                        '& a': {
                                            color: '#006AD3',
                                            fontSize: '14px'
                                        },
                                    }}>
                                        <Link href={''} color='#006AD3' fontSize={13}>Privacy Policy</Link>
                                    </Box>
                                </Stack>

                            </Box>
                        </Grid>
                    </Grid>

                    <Stack spacing={2} mt={4} direction={'row'}>
                        <FacebookIcon color="white" sx={{color: 'white'}}/>
                        <YouTubeIcon color="white" sx={{color: 'white'}}/>
                        <InstagramIcon color="white" sx={{color: 'white'}}/>
                        <XIcon color="white" sx={{color: 'white'}}/>
                    </Stack>

                    <Typography sx={{mt: 2}} color={'#8A9194'} fontSize={12}>© 2024: https://club.autodoc.co.uk AUTODOC CLUB</Typography>
                </Container>
            </Box>
        </>
    );
}

export default Home2Footer;