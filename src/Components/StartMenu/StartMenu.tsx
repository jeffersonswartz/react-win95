import React from 'react'

import { List, ListItem, Divider, Button } from 'react95';
import styled from 'styled-components';

interface Props {
    
}

const LogoIcon = styled.span`
    display: inline-block;
    height: 22px;
    margin-top: -5px;
    margin-left: -2px;
`;

const StartMenu: React.FC<Props> = () => {
    const [open, setOpen] = React.useState(false);

    function handleClick() {
        setOpen(!open);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            {open && (
                <List horizontalAlign="left" verticalAlign="top" open={open} onClick={handleClose}>
                    <ListItem>🖥️ Desktop</ListItem>
                    <ListItem>👯‍♀️‍ Where are you, ZEDD</ListItem>
                    <ListItem>💸 Lottery</ListItem>
                    <ListItem>🧾 Credits</ListItem>
                    <Divider />
                    <ListItem disabled>🔙 Logout</ListItem>
                </List>
            )}
            <Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>
                <LogoIcon>🍏</LogoIcon>
                Start
            </Button>
        </div>
    );
}

export default StartMenu
