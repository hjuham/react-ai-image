import React from 'react';
import { Typography, Link } from '@mui/material';

const divStyle = {
    backgroundColor: '#24292f',
    height: '12em',
    textAlign: 'center',
}

const listStyle = {
    listStyleType: 'none'
}

export default function Footer() {
    return (
        <div style={divStyle}>
            <Typography sx={{ color: 'white', p: '1em' }}>
                <ul style={listStyle}>
                    <li><Link href="https://beta.openai.com/docs/introduction/overview" target="_blank">OpenAI documentation</Link></li>
                    <li><Link href="https://expressjs.com/" target="_blank">Express</Link></li>
                    <li><Link href="https://reactjs.org/" target="_blank">React</Link></li>
                    <li><Link href="https://github.com/hjuham/react-ai-image" target="_blank">GitHub repository</Link></li>
                    <li><Link href="https://www.youtube.com/watch?v=fU4o_BKaUZE" target="_blank">Build An AI Image Generator With OpenAI & Node.js - Tutorial</Link></li>
                </ul>
            </Typography>
        </div>
    )
}
