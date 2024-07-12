import { Box, Card, Container, Grid, List, ListItem, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import SectionTextHeading from './sub_widgets/SectionTextHeading'
import shortid from 'shortid'
import Image from 'next/image'
import DownloadIcon from '@mui/icons-material/Download';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const PdfCard = ({ item }) => {

    const [textColor, setTextColor] = useState('#152329')

    const click = () => {
        console.log('Hello')
    }

    const mouseOver = () => {
        setTextColor('#006AD3')
    }

    const mouseOut = () => {
        setTextColor('#152329')
    }

    return (
        <Card
            variant="outlined"
            onClick={click}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
        >
            <Box display={'flex'} sx={{ p: 2 }}>
                <Image src={'/home/pdf-banner.jpg'} width={70} height={100} layout='intrinsic' />

                <Box display={'flex'} flexDirection={'column'} sx={{ ml: 2 }}>
                    <Typography sx={{ fontSize: 14, }} color={textColor} flexGrow={1}>{item.title}</Typography>

                    <Box display={'flex'} alignItems={'center'} alignContent={'center'}>
                        <DownloadIcon fontSize='small' sx={{ color: '#006AD3' }} />
                        <Typography sx={{ fontSize: 12, ml: 1 }} >Free Download PDF</Typography>
                        <Typography color={'#c4c8c9'} sx={{ fontSize: 12, ml: 1 }} flexGrow={1}>{item.size}</Typography>
                        <BookmarkBorderOutlinedIcon fontSize='small' />
                    </Box>

                </Box>

            </Box>
        </Card>
    );
}

export default function PdfListSection(props) {


    return (
        <>
            <Box sx={{ my: { xl: 0, lg: 0, md: 0, sm: 0, xs: 0 } }}>
                <Container maxWidth={'xl'} sx={{ mb: 6, padding: 0 }} >
                    <Box sx={{ py: { xl: 6, lg: 6, md: 4, sm: 4, xs: 4 } }}>
                        <SectionTextHeading text={'Top repair guides'} />

                        <Grid container sx={{ mt: 2 }} rowSpacing={2} columnSpacing={2}>
                            {props.list.map(item => {
                                return (
                                    <Grid item key={shortid.generate()} xl={4} lg={4} xs={12} smm={12}>
                                        <PdfCard item={item} />
                                    </Grid>
                                )
                            })}
                        </Grid>


                    </Box>
                </Container>
            </Box>
        </>
    )
}
