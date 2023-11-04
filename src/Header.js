import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Typography, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from './DrawerComp';
const PAGES = ["Products", "Services", "About Us", "Contact Us"]
const Header = () => {
    const [value, setValue] = useState(0);
    const Theme = useTheme();
    console.log(Theme);
    const isMatch = useMediaQuery(Theme.breakpoints.down('md'))
    console.log(isMatch);
    return (
        <React.Fragment>
            <AppBar sx={{ background: '#063970' }}>
                <Toolbar>
                    <ShoppingCartCheckoutIcon />
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{fontSize:'1.5rem', paddingLeft:'5%'}}>
                                    SHOPEE
                                </Typography>
                                <DrawerComp />

                            </>
                        ) : (
                            <>
                                <Tabs textColor="inherit" value={value} onChange={(e, newValue) => setValue(newValue)} indicatorColor="primary">
                                    {
                                        PAGES.map((page, index) => (
                                            <Tab key={index} label={page} />

                                        ))
                                    }
                                    
                                </Tabs>
                                <Button sx={{ marginLeft: 'auto' }} variant='contained'>Login</Button>
                                <Button sx={{ marginLeft: '10px' }} variant='contained'>Log Out</Button>
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;
