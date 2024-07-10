'use client'

const { createTheme } = require("@mui/material");

const theme = createTheme({
    typography: {
        
    },palette:{
        primary:{
            main: '#152329'
        }, secondary: {
            main: '#006AD3'
        }
    }, breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1350,
        },
    }
});

export default theme;