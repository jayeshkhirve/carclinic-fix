import { Box, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Montserrat, Roboto } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400']
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400']
})


const InstallAppSection = () => {
    return (
        <>
            <Divider />
            <Box sx={{ marginY: 6 }}>
                <Container maxWidth={'xl'}>
                    <Grid container rowSpacing={8}>
                        <Grid item sm={12} xs={12} md={8} lg={6} xl={6} >
                            <Typography className={montserrat.className} sx={{ fontWeight: 50, fontSize: { xs: 24, sm: 24, md: 30, lg: 30 } }}>Install the AUTODOC CLUB app!</Typography>
                            <Typography sx={{ mt: 2, fontSize: 16, color: '#7C8386' }} className={roboto.className}>Your personal car expenses manager, maintenance tips, reminders about upcoming appointments and service intervals, DIY repair instructions – all this on your phone.</Typography>

                            <Box display={'flex'} sx={{ mt: 4 }}>
                                <img src={'https://cdn.club.autodoc.de/assets/img/global/google-play-download.svg'} />
                                <Box sx={{ width: 32 }}></Box>
                                <img src={'https://cdn.club.autodoc.de/assets/img/global/app-store-download.svg'} />
                            </Box>
                        </Grid>

                        <Grid item sm={0} xs={0} md={2} lg={2} xl={2} />

                        <Grid item sm={12} xs={12} md={4} lg={4} xl={4} >
                            <Box display={'flex'} justifyContent={'center'}>
                                <img src="/home/app_install.svg" width={342} alt="install " />
                                {/* <Image src={appInstallImage} width={342} alt="install "/> */}


                            </Box>



                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>

    );
}

export default InstallAppSection;