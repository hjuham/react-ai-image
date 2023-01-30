import React from 'react'
import { Box, CardContent, Typography, CardActions, Button, Card } from '@mui/material'
import { Link } from 'react-router-dom';


const divStyle = {
    textAlign: 'center',
    backgroundColor: '#a42cd6',
    height: '80vh'
}

const imgStyle = {
    width: '70%'
}
export default function Home() {

    return (
        <div style={divStyle}>
            <Typography sx={{ pb: '1em' }} variant="h2">OpenAI generators</Typography>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                <Card sx={{ width: '20em', height: '25em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Image generator
                        </Typography>
                        <img style={imgStyle} src={require('../assets/preview.png')} alt="preview"></img>
                        <Typography variant="body2">
                            Generate images with OpenAI image generator. Just include a prompt and a size to get started.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ bottom: '0' }}>
                        <Button component={Link} to={'/imagegenerator'} size="small">Generate images</Button>
                    </CardActions>
                </Card>
                <Card sx={{ width: '20em', height: '25em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Text completion
                        </Typography>
                        <img style={imgStyle} src={require('../assets/ai.jpg')} alt="preview"></img>
                        <Typography variant="body2">
                            Generate text with OpenAI text completion. Just include a prompt. (Response length is limited)
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to={'/completiongenerator'} size="small">Generate text</Button>
                    </CardActions>
                </Card>
                <Card sx={{ width: '20em', height: '25em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Edit generator
                        </Typography>
                        <img style={imgStyle} src={require('../assets/edit.jpg')} alt="preview"></img>
                        <Typography variant="body2">
                            Generate text edits with OpenAI. Just include a prompt and instructions to get started.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ bottom: '0' }}>
                        <Button component={Link} to={'/editgenerator'} size="small">Generate edits</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}
