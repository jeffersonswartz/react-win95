import React, { useState, useEffect } from 'react'
import SplashScreen from './SplashScreen/SplashScreen';
import '../Styles/styles.css'
import Desktop from './Desktop/Desktop';

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";

const ResetStyles = createGlobalStyle`
    ${reset}
`;

interface Props {
    
}

const MainContainer: React.FC<Props> = () => {

    const [showSplashScreen, setshowSplashScreen] = useState(true);


    useEffect(() => {
        const splashTimeout = setTimeout(() => {
            setshowSplashScreen(false);
        }, 2000)
        return () => {
            clearTimeout(splashTimeout);
        };
    }, []);

    return (
        <div className="mainContainer">
            <ResetStyles />
            <ThemeProvider theme={themes.default}>
                <SplashScreen show={showSplashScreen} />
                {!showSplashScreen &&
                    <Desktop />
                }
            </ThemeProvider>
        </div>
    )
}

export default MainContainer
