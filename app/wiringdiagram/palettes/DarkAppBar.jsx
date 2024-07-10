import { AppBar, styled } from "@mui/material";

const DarkAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#132530', // Dark background color
    color: 'white', // White text color,
    top: 'auto',
}));

export default DarkAppBar