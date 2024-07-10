import { AppBar, Avatar, Button, Container, IconButton, Toolbar, Typography, useMediaQuery } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import theme from "@/app/wrapers/theme";
import LogoComponent from "./LogoComponent";

const Home2AppBar = () => {
    return (
        <AppBar position="fixed" elevation={0}>
            <Container maxWidth="xl" sx={{ px: { xs: 0.5 } }} disableGutters={true} >

                <Toolbar sx={{ mt: 0.2 }}>
                    <LogoComponent flexGrow={1} fMax={28} fMin={18} iMin={18} iMax={36}/>

                    <Button variant="contained" color="secondary" disableElevation sx={{ height: { xs: 32, sm: 32, md: 48, lg: 48 }, }} startIcon={<PersonOutlineIcon />}>
                        My Account
                    </Button>


                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Home2AppBar;