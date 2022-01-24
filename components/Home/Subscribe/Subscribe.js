import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Subscribe = () => {
    return (
        <Box className='subscribe' sx={{ py: 10 }}>
            <Container>
                <Grid container spacing={4} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={8}>
                        <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold' }} >GET LATEST NEWS IN YOUR INBOX <br />FROM GAMIX GAMING COMMUNITY.</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <button className='btn'>SUBSCRIBE NOW</button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Subscribe;