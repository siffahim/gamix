import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <Box sx={{ bgcolor: '#191919', color: 'background.paper', px: 2 }}>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Image width='300px' layout='responsive' height='300px' src='/banner.png' alt='banner-img'></Image>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ lineHeight: 8 }}>
                        <Typography variant='h1' sx={{ color: '#ffffff', fontWeight: 'bold' }}>Gaming Communitys</Typography>
                        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe quasi aspernatur, sit autem iste.</Typography>
                        <button className='btn'>Join Cummunity</button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;