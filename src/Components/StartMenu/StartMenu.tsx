import React from 'react'

import { List, TaskBar } from '@react95/core';
import styled from 'styled-components';
import { ReaderClosed, WindowsExplorer } from '@react95/icons';

interface Props {

}

const LogoIcon = styled.span`
    display: inline-block;
    height: 22px;
    margin-top: -5px;
    margin-left: -2px;
`;

const StartMenu: React.FC<Props> = () => {

    return (
        <TaskBar
            list={
                <List>
                    <List.Item
                        icon={<ReaderClosed variant="32x32_4" />}
                    >
                        Local Disk (C:)
                    </List.Item>
                    <List.Item
                        icon={<WindowsExplorer variant="32x32_4" />}
                    >
                        Windows Explorer
                    </List.Item>
                </List>
            }
        />
    );
}

export default StartMenu
