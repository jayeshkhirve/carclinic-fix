import { Box, Container, Grid} from '@mui/material'
import React from 'react'
import MainSectionHeader from './sub_widgets/MainSectionHeader'
import LargeButton from './sub_widgets/LargeButton';
import CheckList from '../components/CheckList';
import Image from 'next/image';

export default function DetailVideoSection() {


    const texts = [
        "Watch over 3613 video tutorials and repair your car yourself.",
        "Get advice on DIY replacement of car parts and consumables directly from our experts.",
        "Get to know all the design features of your car and discover all the tricks of parts replacement.",
    ]

    const texts2 = [
        "Get a list of all the tools, care products, and accessories you will need for a particular repair.",
        "Ask AUTODOC specialists and get prompt feedback.",
    ]


    return (
        <>
            <Box sx={{ my: { xl: 0, lg: 0, md: 0, sm: 0, xs: 0 } }}>
                <Container maxWidth={'xl'} sx={{ mb: 6, padding: 0 }} >
                    <Box sx={{ py: { xl: 6, lg: 6, md: 4, sm: 4, xs: 4 } }}>
                        <MainSectionHeader title='Detailed video tutorials on car repairs' subTitle='They make fixing your car easy.' />

                        <Grid container sx={{ mt: 4 }}>
                            <Grid item xl={3} lg={3} alignContent={'center'} alignItems={'center'}>
                                <CheckList mt={{ xl: 4, lg: 4, md: 0, sm: 0, xs: 0 }} list={texts} minWidth='32px' gap={{ xl: 3, lg: 3, xs: 0, sm: 0, md: 0 }} fontSize={{ lg: 16, xl: 16, md: 14, sm: 14, xs: 14 }} />
                            </Grid>

                            <Grid item xl={6} lg={6} >
                                <Box display={'flex'} alignContent={'center'} alignItems={'center'} justifyContent={'center'} justifyItems={'center'} sx={{ px: { xl: 0, lg: 0, md: 6, sm: 6, xs: 6 } }}>
                                    {/* <Image alt='Hello'  width={576} height={670}  src="/home/bg-tablet.png" srcset="/home/bg-tablet-400w.avif 400w, /home/bg-tablet-600w.avif 600w, /home/bg-tablet-800w.avif 800w, /home/bg-tablet-1000w.avif 1000w" sizes="(max-width: 450px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (min-width: 801px) 1000px"  layout="intrinsic"/> */}
                                    {/* <img width={576} height={670}  src="/home/bg-tablet.png" srcset="/home/bg-tablet-400w.avif 400w, /home/bg-tablet-600w.avif 600w, /home/bg-tablet-800w.avif 800w, /home/bg-tablet-1000w.avif 1200w" /> */}
                                    {/* {window.innerWidth} */}
                                    {/* sizes="(max-width: 450px) 400px, (max-width: 600px) 576px, (max-width: 800px) 576px, (min-width: 801px) 576px" */}

                                    <Image layout="intrinsic" width={576} height={670} src={'/home/bg-tablet-1000w.avif'} />
                                    {/* <img width={576} height={670} layout="intrinsic" src="/home/bg-tablet.png" srcset="/home/bg-tablet-400w.avif 450w, https://placehold.co/400x100/png 600w,  https://placehold.co/800x200/png 800w, https://placehold.co/1600x400/png 2000w" sizes='450px' /> */}
                                    {/* <img src='https://placehold.co/1600x400/png' srcSet='https://placehold.co/400x100/png 450w, https://placehold.co/800x200/png 800w, https://placehold.co/1600x400/png 1600w ' sizes='(max-width: 480px) 450px'/> */}
                                    {/* src='/home/bg-tablet.png'  width={576} height={670}  layout="intrinsic" */}

                                    {/* <div className="md:h-20 md:w-20 w-10 h-10 relative">
                                        <Image
                                            quality={100}
                                            title="Floripa+"
                                            src="/home/bg-tablet.png"
                                            alt="Floripa Mais Logo"
                                            loading="eager"
                                            layout="fill"
                                        />
                                    </div> */}
                                </Box>

                            </Grid>

                            <Grid item xl={3} lg={3} alignContent={'center'} alignItems={'center'}>
                                <CheckList mt={{ xl: 4, lg: 4, md: 0, sm: 0, xs: 0 }} list={texts2} minWidth='32px' gap={{ xl: 3, lg: 3, xs: 0, sm: 0, md: 0 }} fontSize={{ lg: 16, xl: 16, md: 14, sm: 14, xs: 14 }} />
                            </Grid>
                        </Grid>

                        <div style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
                            <LargeButton px={4} >GO To Tutorials</LargeButton>
                        </div>

                    </Box>
                </Container>
            </Box>
        </>
    )
}
