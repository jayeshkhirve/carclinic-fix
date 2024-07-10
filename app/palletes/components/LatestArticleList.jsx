import { Grid } from '@mui/material'
import React from 'react'
import LatestArticle from './LatestArticle';

export default function LatestArticleList(props) {

    return (
        <Grid container columnSpacing={2} rowSpacing={3} justifyContent="center">
            {props.articles.map(item => {
                return (
                <Grid item lg={3} xl={3} md={4} sm={6} xs={6} key={Math.random()}>
                    <LatestArticle date={item.date} title={item.title}/>
                </Grid>);
            })}
        </Grid>
    )
}
