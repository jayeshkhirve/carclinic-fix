import { Grid } from '@mui/material'
import React from 'react'
import VideoBanner from './VideoBanner';

export default function VideoList(props) {

    return (
        <Grid container columnSpacing={1} rowSpacing={3} justifyContent="center" justifyItems={'center'}>
            {props.videos.map(item => {
                return (
                <Grid item lg={3} xl={3} md={6} sm={12} xs={12} key={Math.random()}>
                    <VideoBanner thumbnail={item.thumbnail} heading={item.heading} views={item.views} date={item.date}/>
                </Grid>);
            })}
        </Grid>
    )
}
