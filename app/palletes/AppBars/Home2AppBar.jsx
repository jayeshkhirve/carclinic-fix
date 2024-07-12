import { AppBar, Avatar, Box, Button, Container, Divider, Drawer, Grow, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography, useMediaQuery, Zoom } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import theme from "@/app/wrapers/theme";
import LogoComponent from "./LogoComponent";
import { useState } from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Menu } from "@mui/icons-material";
import { useTheme } from "@mui/styles";

const LinkComponent = ({ title, link }) => {

    const [color, setColor] = useState('white');
    const [checked, setChecked] = useState(false);

    const mouseOver = () => {
        setColor('#006AD3');
        setChecked(true)
    }

    const mouseOut = () => {
        setColor('white')
        setChecked(false)
    }


    return (
        <Box onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <Link href={link} underline={'none'} sx={{ color }}>{title}</Link>

            <Zoom in={checked}
            >
                <Box sx={{ width: '100%', height: 2, backgroundColor: '#006AD3', mt: 0.5 }}></Box>
            </Zoom >
        </Box>
    );
}

const Home2AppBar = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const links = [{
        title: 'Tutorials',
        link: '#'
    }, {
        title: 'Life Hacks',
        link: '#'
    }, {
        title: 'Shop',
        link: '#'
    }, {
        title: 'CarBook',
        link: '#'
    }, {
        title: 'CarBook',
        link: '#'
    }, {

        title: 'Discussion',
        link: '#'
    }]

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {links.map((item, index) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );


    

    return (
        <>
            <AppBar position="fixed" elevation={0}>
                <Container maxWidth="xl" sx={{ px: { xs: 0.5 } }} disableGutters={true} >

                    <Toolbar sx={{ mt: 0.2 }}>

                        {isMobile ? <Menu sx={{ mr: 2 }} onClick={() => setOpen(!open)}/> : <></>}


                        <LogoComponent fMax={28} fMin={18} iMin={18} iMax={36} flexGrow={isMobile ? 1 : 0} />

                        {!isMobile ? <Box display={'flex'} flexGrow={1} justifyContent={'center'} justifyItems={'center'} alignItems={'center'} alignContent={'center'}>

                            <Stack spacing={{ xl: 6, lg: 6, md: 3, }} direction={'row'}>
                                {links.map(item => {
                                    return (
                                        <LinkComponent key={item.title} title={item.title} link={'#'} />
                                    )
                                })}
                            </Stack>
                        </Box> : <></>}


                        <Button variant="contained" color="secondary" disableElevation sx={{ height: { xs: 32, sm: 32, md: 48, lg: 48 }, }} startIcon={<PersonOutlineIcon />}>
                            My Account
                        </Button>


                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>

    );
}

export default Home2AppBar;