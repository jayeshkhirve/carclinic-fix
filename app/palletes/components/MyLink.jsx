import {  Link } from '@mui/material'
import React from 'react'



export default function MyLink(props) {
    return (

        <Link fontSize={14} underline="none" color='#006AD3' href={props.link}>{props.title}</Link>

    )
}
