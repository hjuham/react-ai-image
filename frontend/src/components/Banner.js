import React from 'react'
import { Box, AppBar, Typography, Toolbar, Link as MUILink, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ height: '5em', backgroundColor: '#24292f' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: '1em', marginLeft: '1em' }}>
                        OpenAI Generator
                        <Button component={Link} to={'/'}>Home</Button>
                        <Button component={Link} to={'/imagegenerator'}>Image generator</Button>
                        <Button component={Link} to={'/completiongenerator'}>Completion generator</Button>
                    </Typography>
                    <MUILink variant="h6" underline="hover" href="https://beta.openai.com/overview" target='_blank' rel="noreferrer" sx={{ color: 'white', paddingTop: '1em' }}>
                        OpenAI website
                    </MUILink>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
