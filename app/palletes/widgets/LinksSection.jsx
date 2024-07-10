import React from 'react'
import MyLink from '../components/MyLink'
import SectionTextHeading from '../widgets/sub_widgets/SectionTextHeading'
import { Box, Container, Grid } from '@mui/material'

export default function LinksSection() {

    const links = [{
        title: 'How to replace Wiper Blades on TOYOTA',
        link: '#'
    }, {
        title: 'How to replace Wiper Blades on VW',
        link: '#'
    }, {
        title: 'How to replace Brake Pads on VW',
        link: '#'
    }, {
        title: 'How to replace Brake Discs on VW',
        link: '#'
    }, {
        title: 'How to replace Wheel Bearing on VW',
        link: '#'
    }, {
        title: 'How to replace Oil Filter on TOYOTA',
        link: '#'
    }, {
        title: 'How to replace Shock Absorber on VW',
        link: '#'
    }, {
        title: 'How to replace Wiper Blades on OPEL',
        link: '#'
    }]


    return (
        <Box>
            <Container maxWidth={'xl'}>
                <SectionTextHeading text={'Top repair guides for car models'}></SectionTextHeading>
                <Grid container sx={{ mt: 2 }} rowSpacing={2} >
                    {links.map(item => {
                        return (
                            <Grid item xl={4} lg={4} xs={12} sm={12} justifyContent={'center'} alignItems={'center'} justifyItems={'center'} key={Math.random()}>
                                <MyLink title={item.title} link={item.link} />
                            </Grid>
                        )
                    })}

                </Grid>
            </Container>
        </Box>
    )
}
