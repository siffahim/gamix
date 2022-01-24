import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Products = () => {
    return (
        <Box sx={{ bgcolor: '#141414', color: 'white', py: 5 }}>
            <Container>
                <Typography variant='h1' sx={{ fontWeight: 'bold', mb: 6 }}>Product</Typography>
                <Grid container spacing={2} sx={{ px: 5 }}>
                    <Grid item xs={3}>
                        <Card sx={{ bgcolor: '#191919', textAlign: 'center', p: 2 }}>
                            <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold' }}>$135</Typography>
                            <Image src="/product1.png" layout='responsive' alt="" width='350px' height='350px' />
                            <Typography variant='h6' sx={{ color: 'white', fontWeight: 'bold' }}>Ober Headest</Typography>
                            <button>Add To Cart</button>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ bgcolor: '#191919', textAlign: 'center', p: 2 }}>
                            <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold' }}>$135</Typography>
                            <Image src="/product2.png" layout='responsive' alt="" width='350px' height='350px' />
                            <Typography variant='h6' sx={{ color: 'white', fontWeight: 'bold' }}>Ober Headest</Typography>
                            <button>Add To Cart</button>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ bgcolor: '#191919', textAlign: 'center', p: 2 }}>
                            <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold' }}>$135</Typography>
                            <Image src="/product3.png" layout='responsive' alt="" width='350px' height='350px' />
                            <Typography variant='h6' sx={{ color: 'white', fontWeight: 'bold' }}>Ober Headest</Typography>
                            <button>Add To Cart</button>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ bgcolor: '#191919', textAlign: 'center', p: 2 }}>
                            <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold' }}>$135</Typography>
                            <Image src="/product2 (1).png" layout='responsive' alt="" width='350px' height='350px' />
                            <Typography variant='h6' sx={{ color: 'white', fontWeight: 'bold' }}>Ober Headest</Typography>
                            <button>Add To Cart</button>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;