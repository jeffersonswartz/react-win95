import React from 'react'
import TaskBar from '../TaskBar/TaskBar'

interface Props {

}

const Desktop: React.FC<Props> = () => {
    return (
        <>
            <div style={{display: 'flex', flex: 1}}>
                Content
            </div>
            <TaskBar />
        </>
    )
}

export default Desktop;
