import logo from '../assets/LogoWithoutBackground.png'
import Typography from '@mui/material/Typography';

import './MainPage.css'

function MainPage() {
    return (
        <>
            <div className='main-container'>
                <Typography variant='h1'>Marty Plattenbeläge</Typography>
                <img src={logo} alt='image'></img>
                <Typography variant='body1'>Telefon: 056 664 44 36</Typography>
                <Typography variant='body1'>Email: marty-platten@bluewin.ch</Typography>
                <Typography variant='body1'>Adresse: Obere Büelhalde 9, 5634 Merenschwand</Typography>
            </div>
        </>
    )
}

export default MainPage