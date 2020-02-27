import React from 'react'
import './splashScreen.css'

interface Props {
    show: boolean
}

const SplashScreen: React.FC<Props> = ({ show }: Props) => {
    return (
        <>
            {show &&
                <div className="splash-screen">
                    Appplication is loading!    
                </div>
            }
        </>
    )
}

export default SplashScreen
