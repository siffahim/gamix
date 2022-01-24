import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from '../../../styles/join.module.css';

const JoinGame = () => {
    return (
        <Box sx={{ bgcolor: '#141414', color: 'background.paper', px: 2, py: 10 }}>
            <Container>
                <Box sx={{ bgcolor: '#191919', color: 'white', px: 8 }}>
                    <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item xs={7}>
                            <Box>
                                <Typography variant='subtitle1' sx={{ color: '#e50914', letterSpacing: 5, mb: 2 }}>LETS PLAY TOGETHER</Typography>
                                <Typography variant='h5' sx={{ fontWeight: 'bold', fontSize: '30px', mb: 2 }}>JOIN GAMIX ESPORTS TO BECOME  <br /> NEXT PRO GAMER TODAY!</Typography>
                                <Typography variant='subtitle1' sx={{ mb: 4, color: '#706f6d' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptate placeat rerum, voluptatem ipsam sed?</Typography>
                                <button className='btn'>Join Community</button>
                            </Box>
                        </Grid>
                        <Grid item xs={5}>
                            <Image src='/join-bg.png' className={styles.joinImg} alt='joinGame' width='450px' height='450px' />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default JoinGame;