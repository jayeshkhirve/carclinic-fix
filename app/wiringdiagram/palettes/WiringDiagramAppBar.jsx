import { Box, Button, Divider, IconButton, Switch, Toolbar, Typography } from "@mui/material";
import DarkAppBar from "./DarkAppBar";
import SearchIcon from '@mui/icons-material/Search';
import WiringAnimation from "@/src/connection/WiringAnimation";
import WiringSearchView from "./WiringSearchView";
import MenuIcon from '@mui/icons-material/Menu';

const WiringDiagramAppBar = () => {

    const currentHandler = (e, v) => {
        if (v) {
          WiringAnimation.startAnimate(v);
    
        } else {
          WiringAnimation.startAnimate(v);
        }
      }

    return (
        <>
            <DarkAppBar position="static" sx={{ mb: 0 }} elevation={2} style={{}}>
                <Toolbar variant="dense" sx={{ ml: 0, pl: 0 }} style={{ paddingLeft: 0, height: 56 }} >

                    
                    <MenuIcon sx={{mx: 2}}/>
                    <Typography variant="h6" sx={{ ml: 2 }}>Nexon 2016</Typography>

                    <WiringSearchView />

                    <Box sx={{ flexGrow: 1, mr: 2 }} />

                    
                    {/* <Box display={'flex'} sx={{ alignItems: 'center' }}>
                        <Typography variant='h6' style={{ fontSize: '14px' }} sx={{ textTransform: 'uppercase', mr: 1, }}>Search</Typography>
                        <IconButton >
                            <SearchIcon />
                        </IconButton>
                    </Box> */}

                    {/* <Divider orientation="vertical" flexItem sx={{ mx: 2 }} variant="middle" /> */}

                    <Box display={'flex'} sx={{ alignItems: 'center' }}>
                        <Typography variant='h6' style={{ fontSize: '14px' }} sx={{ textTransform: 'uppercase', mr: 1, }}>Current Flow</Typography>
                        <Switch onChange={currentHandler} color="secondary"/>
                    </Box>

                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} variant="middle" />
                    <Button variant="contained" color="secondary">
                        Change Vehicle
                    </Button>
                </Toolbar>
            </DarkAppBar>

        </>
    )
}

export default WiringDiagramAppBar;