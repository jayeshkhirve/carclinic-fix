import { Box, Container } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import MainSectionHeader from './sub_widgets/MainSectionHeader'

export default function YTVideoSection() {

    const aspectRatio = (16 / 9);

    const iframeRef = useRef(null);
    const [iframeHeight, setIframeHeight] = useState(0);

    useEffect(() => {

        const iframe = iframeRef.current;

        if (iframe) {
            const handleResize = (entries) => {
                for (let entry of entries) {
                    const width = entry.contentRect.width;
                    setIframeHeight(width / aspectRatio);
                }
            };

            const resizeObserver = new ResizeObserver(handleResize);
            resizeObserver.observe(iframe);

            return () => {
                resizeObserver.unobserve(iframe);
            };
        }
    }, []);

    return (
        <Box>
            <Container maxWidth={'xl'} sx={{ mb: 6 }}>
                <Box sx={{ py: 6 }}>
                    <MainSectionHeader title='AUTODOC CLUB is your online car log, expense manager, knowledge base, and a platform for communication with like-minded people.' subTitle='Join the community! Maintain your car yourself and save money!' />

                    <Box  sx={{ mt: 4, px: { xl: 14, lg: 14, sm: 4, xs: 4 } }}>
                        <Box justifyContent={'center'} alignItems={'center'} style={{ position: 'relative', overflow: 'hidden', borderRadius: 8, backgroundColor: 'black' }}>
                            <iframe ref={iframeRef} width={'100%'} height={iframeHeight} frameBorder="0" allowFullScreen="true" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" title="How to fix your car with AUTODOC CLUB" src="https://www.youtube.com/embed/hig8k981uPc" id="widget2"></iframe>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
