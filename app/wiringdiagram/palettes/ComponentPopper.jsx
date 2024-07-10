import ApiHelper from "@/src/helpers/ApiHelper";
import { setDrawer } from "@/src/store/slice/viewer.sclice";
import Storage from "@/src/utils/Storage";
import Utils from "@/src/utils/Utils";
import { Cancel, CancelOutlined, Close, CloseOutlined } from "@mui/icons-material";
import { AccordionDetails, AccordionSummary, Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Popper, Switch, Typography, withStyles } from "@mui/material"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import styled from "@emotion/styled";
import KeyIcon from '@mui/icons-material/Key';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const ComponentPopper = () => {
    const drawer = useSelector(state => state.viewerSclice.drawer);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [thumbUrl, setThumbUrl] = useState('');

    // const CustomSwitch = styled(Switch)(({ theme }) => ({
    //     width: 62,
    //     height: 34,
    //     padding: 7,
    //     '& .MuiSwitch-switchBase': {
    //       padding: 9,
    //       color: theme.palette.grey[500],
    //       '&.Mui-checked': {
    //         transform: 'translateX(22px)',
    //         color: theme.palette.common.white,
    //         '& + .MuiSwitch-track': {
    //           opacity: 1,
    //           backgroundColor: theme.palette.primary.main,
    //           borderColor: theme.palette.primary.main,
    //         },
    //       },
    //     },
    //     '& .MuiSwitch-thumb': {
    //       width: 16,
    //       height: 16,
    //       boxShadow: 'none',
    //     },
    //     '& .MuiSwitch-track': {
    //       borderRadius: 20 / 2,
    //       border: `1px solid ${theme.palette.grey[400]}`,
    //       backgroundColor: theme.palette.grey[400],
    //       opacity: 1,
    //       transition: theme.transitions.create(['background-color', 'border']),
    //     },
    //   }));

    useEffect(() => {
        if (drawer.componentId) {
            const component = Storage.findComponentById(drawer.componentId);
            setName(component.oName.split('-')[0]);
            setCode(component.compCode)

            setThumbUrl(ApiHelper.API_URL + '665d90b3b5f09617079755_w1320h1080.webp');

            if (Utils.tmpCompSelected) {
                Utils.tmpCompSelected.unSelect();
            }
        }
    }, [drawer])

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `0px solid #fff`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&::before': {
            display: 'none',
        },
    }));

    const closePopper = () => {
        if (Utils.tmpCompSelected) {
            Utils.tmpCompSelected.unSelect();
        }
        Utils.dispatch(setDrawer({ isOpen: false }));
    }


    const ActionItem = () => {
        const [isCouplerOn, setCouplerOn] = useState(true);

        return (
            <ListItem >
                <ListItemIcon>
                    <SettingsInputHdmiIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary="Coupler" />
                <Switch
                    edge="end"
                    inputProps={{
                        'aria-labelledby': 'switch-list-label-wifi',
                    }}
                    checked={isCouplerOn}
                    onChange={(e, v) => setCouplerOn(v)}
                    // icon={<ElectricBoltIcon />}
                    // checkedIcon={<ElectricBoltIcon />}
                />
            </ListItem>
        )
    }

    return (
        <>
            <Popper open={drawer.isOpen} style={{ position: 'absolute', left: '58px', top: '100px' }}>
                <Card sx={{ maxWidth: 345, width: 345 }}>

                    <CardHeader title={code} action={<IconButton onClick={closePopper}><Close /></IconButton>}>


                    </CardHeader>

                    {/* <Divider /> */}

                    <Box display={'flex'} justifyContent={'center'} sx={{ my: 4 }}>
                        <Avatar src={thumbUrl} sx={{ width: 120, height: 100 }} variant="square" />
                    </Box>



                    {/* <CardContent sx={{mb: 0}} style={{marginBottom: 0}}> */}
                    <Typography gutterBottom variant="h6" component="div" sx={{ mx: 2 }} fontWeight={500}>
                        {name}
                        {/* CKP Sensor */}
                    </Typography>
                    {/* <Button variant="outlined" fullWidth >More</Button> */}
                    {/* </CardContent> */}



                    <Accordion sx={{ elevation: 0 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{ elevation: 0 }}
                        >
                            Actions
                        </AccordionSummary>
                        <AccordionDetails sx={{ elevation: 0 }} style={{ margin: 0, paddingTop: 0, paddingBottom: 0, paddingLeft: 2, paddingRight: 2 }}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem >
                                    <ListItemIcon>
                                        <KeyIcon />
                                    </ListItemIcon>
                                    <ListItemText id="switch-list-label-wifi" primary="Ignition" />
                                    <Switch
                                        edge="end"
                                        inputProps={{
                                            'aria-labelledby': 'switch-list-label-wifi',
                                        }}
                                        
                                        disabled
                                        checked
                                    />
                                </ListItem>

                                <ActionItem />
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <CardContent>
                        {/* <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography> */}
                        <Button variant="contained" fullWidth >More</Button>
                    </CardContent>


                </Card>
            </Popper >
        </>
    )
}

export default ComponentPopper