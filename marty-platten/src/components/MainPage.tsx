import { useState } from 'react';

import logo from '../assets/LogoWithoutBackground.png';
import image1 from '../assets/Screenshot 2024-11-03 183922.png';
import image2 from '../assets/Screenshot 2025-01-19 200636.png';
import image3 from '../assets/desktop-wallpaper-dark-coding-dark-code.jpg';
import { Box, Container, Typography, IconButton, Card, CardMedia } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';


import './MainPage.css'

function MainPage() {
    const images = [logo, image1, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Typography variant="h3" align="center" gutterBottom>
                Marty Plattenbeläge
            </Typography>

            <Box display="flex" alignItems="center" justifyContent="center" gap={2} my={4}>
                <IconButton onClick={handlePrev}>
                    <ArrowBackIos />
                </IconButton>

                <Card
                    elevation={3}
                    sx={{
                        width: '100%',
                        maxWidth: 960, // Width of a 16:9 image with height 540px
                        aspectRatio: '16 / 9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <CardMedia
                        component="img"
                        image={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }}
                    />
                </Card>

                <IconButton onClick={handleNext}>
                    <ArrowForwardIos />
                </IconButton>
            </Box>

            <Box textAlign="center" mt={4}>
                <Typography variant="body1">Telefon: 056 664 44 36</Typography>
                <Typography variant="body1">Email: marty-platten@bluewin.ch</Typography>
                <Typography variant="body1">Adresse: Obere Büelhalde 9, 5634 Merenschwand</Typography>
            </Box>
        </Container>
    )
}

export default MainPage