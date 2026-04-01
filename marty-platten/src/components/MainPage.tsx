import { useState, useEffect, useMemo } from 'react';

import logo from '../assets/LogoWithoutBackground.png';
import image1 from '../assets/Screenshot 2024-11-03 183922.png';
import image2 from '../assets/Screenshot 2025-01-19 200636.png';
import image3 from '../assets/desktop-wallpaper-dark-coding-dark-code.jpg';
import { Box, Container, Typography, IconButton, Card, CardMedia, Paper } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, Phone, Email, LocationOn, Build, GridOn, Handyman } from '@mui/icons-material';

import './MainPage.css'

function MainPage() {
    const images = [image1, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const email = useMemo(() => {
        const user = ['marty', 'platten'].join('-');
        const domain = ['bluewin', 'ch'].join('.');
        return `${user}@${domain}`;
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <>
            {/* Hero Section */}
            <Box className="hero-section">
                <Container maxWidth="md">
                    <img src={logo} alt="Marty Plattenbeläge" className="hero-logo" />
                    <Typography variant="h2" className="hero-title">
                        Marty Plattenbeläge
                    </Typography>
                    <Typography variant="h6" className="hero-subtitle">
                        Qualität und Präzision für Ihre Böden und Wände
                    </Typography>
                </Container>
            </Box>

            {/* Gallery Section */}
            <Box id="galerie" className="section">
                <Container maxWidth="lg">
                    <Typography variant="h4" className="section-title">
                        Unsere Arbeiten
                    </Typography>
                    <Typography variant="body1" className="section-description">
                        Ein Einblick in unsere abgeschlossenen Projekte
                    </Typography>

                    <Box className="carousel-wrapper">
                        <IconButton onClick={handlePrev} className="carousel-arrow" size="large">
                            <ArrowBackIos />
                        </IconButton>

                        <Card elevation={0} className="carousel-card">
                            <CardMedia
                                component="img"
                                image={images[currentIndex]}
                                alt={`Projekt ${currentIndex + 1}`}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'opacity 0.4s ease',
                                }}
                            />
                        </Card>

                        <IconButton onClick={handleNext} className="carousel-arrow" size="large">
                            <ArrowForwardIos />
                        </IconButton>
                    </Box>

                    {/* Dot indicators */}
                    <Box className="carousel-dots">
                        {images.map((_, index) => (
                            <Box
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            />
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Services Section */}
            <Box id="leistungen" className="section section-alt">
                <Container maxWidth="lg">
                    <Typography variant="h4" className="section-title">
                        Unsere Leistungen
                    </Typography>
                    <Typography variant="body1" className="section-description">
                        Fachgerecht und zuverlässig – von der Beratung bis zur Fertigstellung
                    </Typography>

                    <Box className="services-grid">
                        <Paper elevation={0} className="service-card">
                            <GridOn sx={{ fontSize: 40, color: 'var(--color-accent)', mb: 2 }} />
                            <Typography variant="h6" className="service-title">Plattenbeläge</Typography>
                            <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
                                Professionelle Verlegung von Fliesen und Platten für Böden und Wände in höchster Qualität.
                            </Typography>
                        </Paper>
                        <Paper elevation={0} className="service-card">
                            <Build sx={{ fontSize: 40, color: 'var(--color-accent)', mb: 2 }} />
                            <Typography variant="h6" className="service-title">Sanierung</Typography>
                            <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
                                Fachgerechte Sanierung und Erneuerung bestehender Plattenbeläge und Untergründe.
                            </Typography>
                        </Paper>
                        <Paper elevation={0} className="service-card">
                            <Handyman sx={{ fontSize: 40, color: 'var(--color-accent)', mb: 2 }} />
                            <Typography variant="h6" className="service-title">Beratung</Typography>
                            <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
                                Individuelle Beratung bei der Material- und Designwahl für Ihr Projekt.
                            </Typography>
                        </Paper>
                    </Box>
                </Container>
            </Box>

            {/* Contact Section */}
            <Box id="kontakt" className="section">
                <Container maxWidth="md">
                    <Typography variant="h4" className="section-title">
                        Kontakt
                    </Typography>
                    <Typography variant="body1" className="section-description">
                        Wir freuen uns auf Ihre Anfrage
                    </Typography>

                    <Box className="contact-grid">
                        <Paper elevation={0} className="contact-card">
                            <Phone sx={{ fontSize: 32, color: 'var(--color-accent)' }} />
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'var(--color-text-muted)' }}>Telefon</Typography>
                                <Typography variant="body1" fontWeight={500}>
                                    <a href="tel:0566644436" className="contact-link">056 664 44 36</a>
                                </Typography>
                            </Box>
                        </Paper>
                        <Paper elevation={0} className="contact-card">
                            <Email sx={{ fontSize: 32, color: 'var(--color-accent)' }} />
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'var(--color-text-muted)' }}>Email</Typography>
                                <Typography variant="body1" fontWeight={500}>
                                    <a href={`mailto:${email}`} className="contact-link">{email}</a>
                                </Typography>
                            </Box>
                        </Paper>
                        <Paper elevation={0} className="contact-card">
                            <LocationOn sx={{ fontSize: 32, color: 'var(--color-accent)' }} />
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'var(--color-text-muted)' }}>Adresse</Typography>
                                <Typography variant="body1" fontWeight={500} sx={{ color: 'var(--color-text)' }}>
                                    Obere Büelhalde 9, 5634 Merenschwand
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Container>
            </Box>

            {/* Footer */}
            <Box component="footer" className="footer">
                <Container maxWidth="lg">
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} Marty Plattenbeläge. Alle Rechte vorbehalten.
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default MainPage
