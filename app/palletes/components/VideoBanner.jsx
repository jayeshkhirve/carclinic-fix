import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import RSeperator from '../widgets/sub_widgets/RSeperator'
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';

export default function VideoBanner(props) {
    const [headingColor, setHeadingColor] = useState('#152329')
    const mouseOverHandler = () => {
        setHeadingColor('#006AD3')
    }

    const mouseOutHandler = () => {
        setHeadingColor('#152329')
    }

    const width = 310, height = 174;

    return (
        <>
            <Box display={'flex'} justifyContent="center" justifyItems={'center'}>
                <Box style={{ width, }} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler} >
                    <div style={{ borderRadius: '8px', overflow: 'hidden', width, height }}>
                        <Image src={props.thumbnail ? props.thumbnail : '/home/video-banner.png'} width={width} height={height} objectFit="cover" />
                    </div>

                    <Typography sx={{ mt: 2, fontSize: '14px' }} color={headingColor}>{props.heading}</Typography>

                    <Box display={'flex'} sx={{ mt: 1 }} alignContent={'center'} alignItems={'center'}>
                        <Typography color={'#ababab'} sx={{ fontSize: '14px' }}>{props.views ? props.views : 0} views</Typography>
                        <RSeperator />
                        <Typography color={'#ababab'} flexGrow={1} sx={{ fontSize: '14px' }}>Published On: {props.date ? props.date : 0}</Typography>
                        <TurnedInNotOutlinedIcon sx={{ color: '#ababab' }}></TurnedInNotOutlinedIcon>
                    </Box>
                </Box>
            </Box>



        </>
    )
}
