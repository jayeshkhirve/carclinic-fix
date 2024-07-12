'use client'

import { Box, Container, Grid, Typography } from "@mui/material";
import Home2AppBar from "../palletes/AppBars/Home2AppBar";
import { makeStyles, styled } from "@mui/styles";
import theme from "../wrapers/theme";
import { Montserrat } from "next/font/google";
import PricingSection from "../palletes/widgets/PricingSection";
import SectionHeading from "../palletes/widgets/sub_widgets/SectionIconHeading";
import MySvg from '../../public/home/ok_icon.svg'
import LargeButton from "../palletes/widgets/sub_widgets/LargeButton";
import VideoList from "../palletes/components/VideoList";
import LatestArticleList from "../palletes/components/LatestArticleList";
// import YTVideoSection from "../palletes/widgets/YTVideoSection";
import LinksSection from "../palletes/widgets/LinksSection";
import ProfileAssistantSection from "../palletes/widgets/ProfileAssistantSection";
import YTVideoSection from "../palletes/widgets/YTVideoSection";
import DetailVideoSection from "../palletes/widgets/DetailVideoSection";
import PdfListSection from "../palletes/widgets/PdfListSection";
import NotificationSection from "../palletes/widgets/NotificationSection";
import InfoComponent from "../palletes/components/InfoComponent";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400']
});




const CenteredBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

    [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
}));

const mainVideos = [{
    thumbnail: '/home/video-banner.png',
    heading: 'How to change fuel filter on HYUNDAI SANTA FÉ CM TUTORIAL | AUTODOC',
    views: '198K',
    date: '20/08/2019'
}, {
    thumbnail: '/home/video-banner.png',
    heading: 'How to replace rear handbrake shoes on OPEL CORSA C [TUTORIAL AUTODOC]',
    views: '198K',
    date: '09/08/2019'
}, {
    thumbnail: '/home/video-banner.png',
    heading: 'How to change fuel filter BMW 3 (E90) [TUTORIAL AUTODOC]',
    views: '198K',
    date: '20/08/2015'
}, {
    thumbnail: '/home/video-banner.png',
    heading: 'How to change front shock absorbers on BMW 3 E90 TUTORIAL | AUTODOC',
    views: '190K',
    date: '20/08/2011'
}]

const articles = [{
    date: '27.06.2024',
    title: 'Toll Roads in Europe: How Much Will You Pay for EU Vignettes?'
}, {
    date: '27.06.2024',
    title: 'Toll Roads in Europe: How Much Will You Pay for EU Vignettes?'
}, {
    date: '27.06.2024',
    title: 'Toll Roads in Europe: How Much Will You Pay for EU Vignettes?'
}, {
    date: '27.06.2024',
    title: 'Toll Roads in Europe: How Much Will You Pay for EU Vignettes?'
}, {
    date: '27.06.2024',
    title: 'Toll Roads in Europe: How Much Will You Pay for EU Vignettes?'
}, {
    date: '27.06.2024',
    title: 'Toll Roads in Europe: How Much Will You Pay for EU Vignettes?'
}, {
    date: '27.06.2024',
    title: 'Toll Roads in Europe: How Much Will You Pay for EU Vignettes?'
}, {
    date: '27.06.2024',
    title: 'Toll Roads in Europe: How Much Will You Pay for EU Vignettes?'
}]

const pdfList = [{
    title: 'How to change a number plate light on the Ford Transit Mk7 van – replacement guide',
    img: '',
    size: '200kb',
    link: '#'
}, {
    title: 'How to change a number plate light on the Ford Transit Mk7 van – replacement guide',
    img: '',
    size: '200kb',
    link: '#'
}, {
    title: 'How to change a number plate light on the Ford Transit Mk7 van – replacement guide',
    img: '',
    size: '200kb',
    link: '#'
}, {
    title: 'How to change a number plate light on the Ford Transit Mk7 van – replacement guide',
    img: '',
    size: '200kb',
    link: '#'
}, {
    title: 'How to change a number plate light on the Ford Transit Mk7 van – replacement guide',
    img: '',
    size: '200kb',
    link: '#'
}, {
    title: 'How to change a number plate light on the Ford Transit Mk7 van – replacement guide',
    img: '',
    size: '200kb',
    link: '#'
}, {
    title: 'How to change a number plate light on the Ford Transit Mk7 van – replacement guide',
    img: '',
    size: '200kb',
    link: '#'
}, {
    title: 'How to change a number plate light on the Ford Transit Mk7 van – replacement guide',
    img: '',
    size: '200kb',
    link: '#'
}, {
    title: 'How to change a number plate light on the Ford Transit Mk7 van – replacement guide',
    img: '',
    size: '200kb',
    link: '#'
}]

const Home = () => {
    const useStyles = makeStyles({
        toolbar: theme.mixins.toolbar
    })

    const classes = useStyles();



    return (
        <>
            <Box sx={{ backgroundColor: 'white' }}>
                <Home2AppBar />
                <div style={{ height: classes.toolbar }}></div>

                <Box sx={{ backgroundColor: '#152329' }}>
                    <Container maxWidth={'xl'} >
                        <Grid container sx={{ pt: 28, pb: 24 }}>
                            <Grid item lg={6} xl={6}>
                                <CenteredBox >
                                    <Typography color={'white'} className={montserrat.className} variant="h4" sx={{ fontSize: '36px' }}>The Worlds Most  Accurate Unit Testing  Generative AI.</Typography>

                                    <Typography sx={{ mt: 2, fontSize: { xs: 14, sm: 14, md: 16, lg: 14, xl: 14 } }} color={'#ABABAB'}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. </Typography>

                                    {/* <Button variant="conatianed" sx={{ backgroundColor: '#006AD3', height: '48px', color: 'white', mt: 4, px: 10 }} >
                                        Join Now
                                    </Button> */}

                                    <LargeButton >Join Now</LargeButton>
                                </CenteredBox>

                            </Grid>
                            <Grid item lg={6} xl={6}>

                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Container maxWidth={'xl'}>
                    <InfoComponent isRight={true}/>

                </Container>

                <NotificationSection />

                <PdfListSection list={pdfList} />

                <DetailVideoSection />

                <ProfileAssistantSection />

                <Box>
                    <Container maxWidth={'xl'} sx={{ pb: 8 }}>
                        <SectionHeading icon={<MySvg />} text='Top repair guides' />
                        <VideoList videos={mainVideos} />
                    </Container>

                    <Container maxWidth={'xl'}>
                        <SectionHeading icon={<MySvg />} text='Top repair guides' />
                        <LatestArticleList articles={articles} />
                    </Container>
                </Box>

                <YTVideoSection />

                <LinksSection />

                <PricingSection />





            </Box >
        </>
    )
}

export default Home;