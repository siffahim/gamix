import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'text.primary', color: '#706f6d', pt: 10 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box>
                            <Typography variant='h4' sx={{ mb: 2, fontWeight: 'bold', color: 'white', letterSpacing: 4 }} >GAMIX<span style={{ color: '#e50914' }}>.</span></Typography>
                            <Typography variant='body.1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos velit voluptatum eligendi laboriosam beatae accusantium molestiae illo est distinctio possimus?</Typography>
                            <ul style={{ display: 'flex', padding: '0px', marginTop: '30px' }}>
                                <li className='footer-icon'><i className="fas fa-vr-cardboard"></i></li>
                                <li className='footer-icon'><i className="fab fa-twitter"></i></li>
                                <li className='footer-icon'><i className="fab fa-facebook-f"></i></li>
                                <li className='footer-icon'><i className="fab fa-youtube"></i></li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ lineHeight: 2 }}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'white' }}>Site Menu</Typography>
                            <li>
                                <Typography variant='body.1'>Home</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'>Tournaments</Typography>
                            </li>

                            <li>
                                <Typography variant='body.1'>About Us</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'>Reviews</Typography>
                            </li>

                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ lineHeight: 2 }}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'white' }}>Useful Links</Typography>
                            <li>
                                <Typography variant='body.1'>Create Account</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'>Subscription</Typography>
                            </li>

                            <li>
                                <Typography variant='body.1'>Affiliat</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'>Site Condition</Typography>
                            </li>

                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ lineHeight: 2 }}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'white' }}>Information</Typography>
                            <li>
                                <Typography variant='body.1'>FAQ</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'>Site Maps</Typography>
                            </li>

                            <li>
                                <Typography variant='body.1'>Privacy Policy</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'>Contact Us</Typography>
                            </li>

                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ py: 5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, borderTop: '1px solid white' }}>
                        <Typography variant='body.1' sx={{ pt: 2 }}>2021-2030 - Developed by EpikTheme.</Typography>
                        <Typography variant='body.1' sx={{ pt: 2 }}>All Rights Reserved.</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;