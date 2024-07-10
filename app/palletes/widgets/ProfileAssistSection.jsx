import { Accordion, AccordionDetails, Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/styles';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CheckIcon from '@mui/icons-material/Check';
import MainSectionHeader from './sub_widgets/MainSectionHeader';

const Accordion1 = styled((props) => (
    <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `0px solid ${theme.palette.divider}`,
    marginTop: '12px',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    border: `1px solid #F4F5F5`,
    borderRadius: 4,
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : '#fafbfb',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));



const listItems = [
    'Recommendations with car part replacement intervals.',
    'A list of the required spares, compiled specifically for your vehicle.',
    'Tips on servicing and inspection of your car.'
]

const list = [{
    title: 'Car servicing schedule:',
    icon: <AccessAlarmsIcon />,
    listItems,
}, {
    title: 'Expense statistics:',
    icon: <AccessAlarmsIcon />,
    listItems,
}, {
    title: 'Car repairs and oil change history:',
    icon: <AccessAlarmsIcon />,
    listItems,
}, {
    title: 'Refuelling history:',
    icon: <AccessAlarmsIcon />,
    listItems,
}]

const listItemStyle = {
    padding: '0px 0'
}

export default function ProfileAssistSection() {
    const [expanded, setExpanded] = React.useState('panel1');


    const handleChange = (panel) => (event, newExpanded) => {
        if (expanded != panel) {
            setExpanded(newExpanded ? panel : false);
        }
    };


    return (
        <Box>
            <Container maxWidth={'xl'} sx={{mb: 6}}>
                <Box sx={{py: 6}}>
                    <MainSectionHeader title='Your profile is your personal assistant.' subTitle='It can track car expenses, keep a car log and replacement schedule, and save favourite materials, notes and documents' />
                </Box>

                <Grid container spacing={12}>
                    <Grid item xl={4} lg={4}>

                        {list.map((item, index) => {
                            const pName = 'panel' + (index + 1)
                            return (
                                <Accordion1 expanded={expanded === pName} onChange={handleChange(pName)} key={Math.random()}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: expanded === pName ? '#006AD3' : '#152329' }} />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"

                                    >
                                        <Box display={'flex'} alignItems={'center'}>
                                            <AccessAlarmsIcon sx={{ mr: 2, color: expanded === pName ? '#006AD3' : '#152329' }} />
                                            <Typography fontSize={18}> {item.title}</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box justifyContent={'center'} alignItems={'center'} justifyItems={'center'}>
                                            <List >
                                                {item.listItems.map(item => {
                                                    return (
                                                        <ListItem style={listItemStyle} key={Math.random()}>
                                                            <ListItemIcon sx={{ minWidth: '32px' }}>
                                                                <CheckIcon fontSize={'small'} sx={{ color: expanded === pName ? '#006AD3' : '#152329' }} />
                                                            </ListItemIcon>
                                                            <ListItemText >

                                                                <Typography fontSize={16} color={'#7c8386'} maxWidth={280}>{item}</Typography>


                                                            </ListItemText>
                                                        </ListItem>
                                                    )
                                                })}

                                            </List>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion1>
                            )
                        })}

                    </Grid>

                    <Grid item lg={8} xl={8}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'} sx={{ mt: 0 }}>
                            <div style={{ boxShadow: '0 3.72436px 37.2436px rgba(0, 0, 0, .15' }}>
                                <img src='/home/TopD.png' />
                                <img src='/home/panel.jpg' />
                            </div>

                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
