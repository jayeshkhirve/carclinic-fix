import ApiHelper from "@/src/helpers/ApiHelper";
import { setDrawer } from "@/src/store/slice/viewer.sclice";
import Storage from "@/src/utils/Storage";
import Utils from "@/src/utils/Utils";
import { Avatar, Box, Button, Drawer, Grid, IconButton, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const WiringDiagramComponentSidebar = (props) => {
    const drawer = useSelector(state => state.viewerSclice.drawer);
    const [thumbUrl, setThumbUrl] = useState('');
    const [name, setName] = useState('')

    useEffect(() => {
        if (drawer.componentId) {
            const component = Storage.findComponentById(drawer.componentId);
            setName(component.oName.split('-')[0]);

            setThumbUrl(ApiHelper.API_URL + '665d90b3b5f09617079755_w1320h1080.webp')
            console.log(thumbUrl)
        }
    }, [drawer])

    return (
        <>
            <Drawer open={drawer.isOpen} onClose={() => Utils.dispatch(setDrawer({ isOpen: false }))}>
                <Box width={300} height={3000} display="flex" alignItems="center" flexDirection='column' sx={{ px: 1 }}>
                    <Avatar sx={{ width: '64px', height: '64px', mt: 4 }} src={thumbUrl} />

                    <Typography sx={{ mt: 2, fontWeight: 'bold' }}>{name}</Typography>

                    {/* <Button variant="outlined" fullWidth endIcon={<NavigateNextIcon />} sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 4
                    }}>
                        Trouble Codes
                    </Button>


                    <Button variant="outlined" fullWidth endIcon={<NavigateNextIcon />} sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 2
                    }}>
                        Component Checks
                    </Button>

                    <Button variant="outlined" fullWidth endIcon={<NavigateNextIcon />} sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 2
                    }}>
                        Pin Outs
                    </Button> */}

                    <Paper elevation={1} sx={{ width: '90%', px: 2, py: 1, mt: 4, mx: 2 }}>
                        <Box display={'flex'}>
                            <Typography variant="h6" sx={{ fontSize: '14px' }}>Trouble Codes</Typography>
                            <Box sx={{ flexGrow: 1 }}></Box>
                            <IconButton sx={{ m: 0, p: 0 }}>
                                <NavigateNextIcon sx={{ m: 0, p: 0 }} />
                            </IconButton>
                        </Box>

                    </Paper>
                    



                    <Paper elevation={1} sx={{ width: '90%', px: 2, py: 1, mt: 2 }}>
                        <Box display={'flex'}>
                            <Typography variant="h6" sx={{ fontSize: '14px' }}>Component Checks</Typography>
                            <Box sx={{ flexGrow: 1 }}></Box>
                            <IconButton sx={{ m: 0, p: 0 }}>
                                <NavigateNextIcon sx={{ m: 0, p: 0 }} />
                            </IconButton>
                        </Box>

                    </Paper>

                    <Paper elevation={1} sx={{ width: '90%', px: 2, py: 1, mt: 2 }}>
                        <Box display={'flex'}>
                            <Typography variant="h6" sx={{ fontSize: '14px' }}>Pin Outs</Typography>
                            <Box sx={{ flexGrow: 1 }}></Box>
                            <IconButton sx={{ m: 0, p: 0 }}>
                                <NavigateNextIcon sx={{ m: 0, p: 0 }} />
                            </IconButton>
                        </Box>

                    </Paper>

                </Box>
            </Drawer>
        </>
    )

}

export default WiringDiagramComponentSidebar;