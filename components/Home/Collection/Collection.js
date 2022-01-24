import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const games = [
    {
        id: 1,
        img: '/game1.jpg',
        title: 'Survival Land'
    },
    {
        id: 1,
        img: '/game2.jpg',
        title: 'Battles Zones'
    },
    {
        id: 1,
        img: '/game3.jpg',
        title: 'Zombie World'
    },
    {
        id: 1,
        img: '/game4.jpg',
        title: 'Double Dragon'
    }
]

const Collection = () => {
    return (
        <div style={{ background: '#141414', color: 'white', padding: '50px' }}>
            <Container>
                <Grid container spacing={3} >
                    <Grid item xs={4}>
                        <Box>
                            <Typography variant='subtitle1' sx={{ color: '#e50914' }}>TODAYS</Typography>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', my: 2, fontSize: '30px' }}>GAMES COLLECTION</Typography>
                            <Typography variant='subtitle1' sx={{ color: '#706f6d' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography><br />
                            <button className='btn'>Browse More</button>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                            <Grid item xs={3}>
                                <Image src={games[0].img} alt='game' width='180px' height='250px' />
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{games[0].title}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Image src={games[1].img} alt='game' width='180px' height='250px' />
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{games[1].title}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Image src={games[2].img} alt='game' width='180px' height='250px' />
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{games[2].title}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Image src={games[3].img} alt='game' width='180px' height='250px' />
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{games[3].title}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Collection;