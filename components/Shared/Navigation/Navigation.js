import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Navigation.module.css';

const Navigation = () => {
    return (
        <Box className={styles.header}>
            <div>
                <a href="#"><Typography variant='h5' sx={{ fontWeight: 'bold', letterSpacing: 3 }}>GAMIX</Typography></a>
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link href="#"><Typography sx={{ fontSize: '22px' }}><i className="fas fa-search"></i></Typography></Link>
                </li>
                <li>
                    <Link href="#"><Typography sx={{ fontSize: '22px' }}><i className="fas fa-shopping-bag"></i></Typography></Link>
                </li>
                <li>
                    <Link href="#"><Typography sx={{ fontSize: '22px' }}><i className="fas fa-user"></i></Typography></Link>
                </li>
                <li className={styles.menubar}>
                    <Link href="#"><Typography sx={{ fontSize: '22px' }}><i className="fas fa-bars"></i></Typography></Link>
                </li>
            </ul>
        </Box>
    );
};

export default Navigation;