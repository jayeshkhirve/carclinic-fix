import { AppBar, Autocomplete, Box, Divider, Fade, IconButton, InputBase, List, ListItem, ListItemButton, ListItemText, Paper, Popper, Switch, TextField, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import Utils from '@/src/utils/Utils';
import WiringAnimation from '@/src/connection/WiringAnimation';
import SearchIcon from '@mui/icons-material/Search';
import React, { useRef, useState } from 'react';
import Config from '@/src/utils/Config';
import CloseIcon from '@mui/icons-material/Close';

const BtmAppBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [popperHeight, setPopperheight] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [compList, setCompList] = useState([]);


  const DarkAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'white', // Dark background color
    color: 'black', // White text color,
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
    top: 'auto',
    bottom: 0,
    marginTop: 2
  }));

  const options = [
    'Igition Coil',
    'fuel Injector',
    'CKP Sensor',
    'Fuse Relay', ,
    'Arc Sensor'
  ]



  const currentHandler = (e, v) => {
    if (v) {
      WiringAnimation.startAnimate(v);

    } else {
      WiringAnimation.startAnimate(v);
    }
  }

  const searchHandler = () => {
    const canvasHeight = Config.canvasHeight;
    setPopperheight(canvasHeight);
    setIsOpen(!isOpen)
  }

  const searchChangeHandler = (e) => {
    const text = e.target.value;

    if (text.length > 0) {
      setIsSearching(true);
      setCompList(options)
    } else {
      setIsSearching(false);
      setCompList([])
    }
  }

  return (
    <>

      {compList.length > 0 ? <Popper open={isOpen} sx={{ zIndex: 1199, }} style={{ position: 'absolute', top: popperHeight - 250, left: 0 }}  >
        <Paper sx={{ pl: 2, width: '420px', maxHeight: '250px' }}>
          <Box style={{}} sx={{ px: 1 }} fullWidth>
            <List fullWidth >
              {compList.map(item => {
                return (
                  <div key={Utils.getNanoId()}>
                    <ListItemButton fullWidth>
                      <ListItemText>{item}
                      </ListItemText>
                    </ListItemButton >
                    <Divider component="li" fullWidth />
                  </div>

                )
              })}


              {/* <ListItem fullWidth>Sensor 2</ListItem> */}
            </List>
          </Box>
        </Paper>
      </Popper> : <></>}

      <Popper open={isOpen} sx={{ zIndex: 1200, }} style={{ position: 'absolute', top: popperHeight }}  >
        <Box display={'flex'} style={{ border: '0.5px solid #3E91FF', backgroundColor: '#fff', }} sx={{ px: 1, width: '420px' }}>
          <InputBase autoFocus placeholder='Search' sx={{ pl: 3 }} style={{ height: 46, backgroundColor: '#fff', }} fullWidth onChange={searchChangeHandler} />
          <IconButton onClick={searchHandler}>
            <CloseIcon fontSize='small' />
          </IconButton>
        </Box>
      </Popper>





      <DarkAppBar position="static" sx={{ mb: 0 }}  >
        <Toolbar variant="dense" sx={{ ml: 0, pl: 0 }} style={{ paddingLeft: 0 }}>

          <Box sx={{ flexGrow: 1, mr: 2 }} />

          <Box display={'flex'} textAlign={'center'} sx={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>

            <Typography variant='h6' style={{ fontSize: '14px' }} sx={{ textTransform: 'uppercase', mr: 1, }}>Search</Typography>
            <IconButton sx={{ mr: 1 }} onClick={searchHandler}>
              <SearchIcon />
            </IconButton>


            <Divider orientation="vertical" flexItem sx={{ mr: 2 }} />
            <Typography variant='h6' style={{ fontSize: '14px' }} sx={{ textTransform: 'uppercase', mr: 1 }}>Current Flow</Typography>
            <Switch onChange={currentHandler} />

            <Divider orientation="vertical" flexItem sx={{ mr: 2 }} />

            <IconButton onClick={() => Utils.diagramViewer.zoomIn()} >
              <ZoomInIcon />

            </IconButton>
            <IconButton onClick={() => Utils.diagramViewer.zoomOut()}>
              <ZoomOutIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </DarkAppBar >

    </>

  )
}

export default BtmAppBar