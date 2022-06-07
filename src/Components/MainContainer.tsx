import React, { useState, useEffect } from 'react'
import SplashScreen from './SplashScreen/SplashScreen';
import '../Styles/styles.css'
import Desktop from './Desktop/Desktop';

import { ThemeProvider } from '@react95/core';
import '@react95/icons/icons.css';

interface Props {
    
}

const MainContainer: React.FC<Props> = () => {

    const [showSplashScreen, setShowSplashScreen] = useState(true);


    useEffect(() => {
        const splashTimeout = setTimeout(() => {
            setShowSplashScreen(false);
        }, 2000)
        return () => {
            clearTimeout(splashTimeout);
        };
    }, []);

    return (
        <div className="mainContainer">
            <ThemeProvider>
                <SplashScreen show={showSplashScreen} />
                {!showSplashScreen &&
                    <Desktop />
                }
            </ThemeProvider>
        </div>
    )
}

export default MainContainer
