import { useState, useEffect, useMemo } from 'react';

import logo from '../assets/LogoWithoutBackground.png';
import { Box, Container, Typography, IconButton, Card, CardMedia, Paper, Button } from '@mui/material';
import { ArrowBack, ArrowForward, Phone, Email, LocationOn } from '@mui/icons-material';

import './MainPage.css'

// ponytail: placeholder photos — replace with real project photos when available
const galleryImages = [
    { src: 'https://picsum.photos/seed/badezimmer/1600/900', alt: 'Beispielbild – Projektfoto folgt' },
    { src: 'https://picsum.photos/seed/bodenplatten/1600/900', alt: 'Beispielbild – Projektfoto folgt' },
    { src: 'https://picsum.photos/seed/wandbelag/1600/900', alt: 'Beispielbild – Projektfoto folgt' },
];

function MainPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const email = useMemo(() => {
        const user = ['marty', 'platten'].join('-');
        const domain = ['bluewin', 'ch'].join('.');
        return `${user}@${domain}`;
    }, []);
    const emailDisplay = useMemo(
        () => email.replace('@', ' [at] ').replace('.', ' [dot] '),
        [email],
    );

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused]);

    return (
        <>
            {/* Hero Section */}
            <Box className="hero-section">
                <Container maxWidth="md" className="hero-content">
                    <img src={logo} alt="Marty Plattenbeläge" className="hero-logo" />
                    <Typography variant="h2" className="hero-title">
                        Marty Plattenbeläge
                    </Typography>
                    <Typography variant="h6" className="hero-subtitle">
                        Qualität und Präzision für Ihre Böden und Wände
                    </Typography>
                    <Button href="#kontakt" variant="contained" size="large" className="hero-cta" disableElevation>
                        Kontakt aufnehmen
                    </Button>
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

                    <Box
                        className="carousel-wrapper"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <Card elevation={0} className="carousel-card">
                            {galleryImages.map((image, index) => (
                                <CardMedia
                                    key={image.src}
                                    component="img"
                                    image={image.src}
                                    alt={image.alt}
                                    className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ))}

                            <Box className="carousel-counter">
                                {currentIndex + 1} / {galleryImages.length}
                            </Box>

                            <IconButton onClick={handlePrev} aria-label="Vorheriges Bild" className="carousel-arrow carousel-arrow-prev" size="large">
                                <ArrowBack />
                            </IconButton>
                            <IconButton onClick={handleNext} aria-label="Nächstes Bild" className="carousel-arrow carousel-arrow-next" size="large">
                                <ArrowForward />
                            </IconButton>
                        </Card>
                    </Box>

                    {/* Dot indicators */}
                    <Box className="carousel-dots">
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                aria-label={`Bild ${index + 1} anzeigen`}
                                onClick={() => setCurrentIndex(index)}
                                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            />
                        ))}
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
                            <Phone sx={{ fontSize: 32, color: '#2563eb' }} />
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">Telefon</Typography>
                                <Typography variant="body1" fontWeight={500}>
                                    <a href="tel:0566644436" className="contact-link">056 664 44 36</a>
                                </Typography>
                            </Box>
                        </Paper>
                        <Paper elevation={0} className="contact-card">
                            <Email sx={{ fontSize: 32, color: '#2563eb' }} />
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">Email</Typography>
                                <Typography variant="body1" fontWeight={500}>
                                    <button
                                        type="button"
                                        onClick={handleEmailClick}
                                        className="contact-link contact-link-button"
                                        aria-label="E-Mail senden"
                                    >
                                        {emailDisplay}
                                    </button>
                                </Typography>
                            </Box>
                        </Paper>
                        <Paper elevation={0} className="contact-card">
                            <LocationOn sx={{ fontSize: 32, color: '#2563eb' }} />
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">Adresse</Typography>
                                <Typography variant="body1" fontWeight={500}>
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
