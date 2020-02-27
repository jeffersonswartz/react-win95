import React from 'react'

import { AppBar, Toolbar, TextField } from 'react95';
import StartMenu from '../StartMenu/StartMenu';


interface Props {
    
}

const TaskBar: React.FC<Props> = () => {
    return (
        <AppBar style={{ position: 'relative' }}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <StartMenu />
                <TextField placeholder="Search..." width={150} style={{ marginLeft: 4 }} />
            </Toolbar>
        </AppBar>
    )
}

export default TaskBar
