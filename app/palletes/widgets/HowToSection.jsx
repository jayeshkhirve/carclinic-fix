import { Box, Container } from '@mui/material'
import React from 'react'
import MainSectionHeader from './sub_widgets/MainSectionHeader'

export default function HowToSection() {
    return (

        <Box>
            <Container maxWidth={'xl'} sx={{ mb: 6 }}>
                <Box sx={{ py: 6 }}>
                    <MainSectionHeader title='Your profile is your personal assistant.' subTitle='It can track car expenses, keep a car log and replacement schedule, and save favourite materials, notes and documents' />
                </Box>

                <div style={{width: 200, height: 200, borderRadius: '50%', backgroundImage: "url(\"data:image/svg+xml,%3csvg width='50%25' height='50%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")" }}>

                </div>
            </Container>
        </Box>
    )
}
