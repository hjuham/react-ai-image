import React from 'react'
import { Box, CardContent, Typography, CardActions, Button, Card } from '@mui/material'
import { Link } from 'react-router-dom';

const divStyle = {
    textAlign: 'center',
}
export default function Home() {

    return (
        <div style={divStyle}>
            <Typography variant="h2">OpenAI generators</Typography>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                <Card sx={{ width: '20em', height: '28em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Image generator
                        </Typography>
                        <img src={require('../assets/preview.png')} alt="preview"></img>
                        <Typography variant="body2">
                            Generate images with OpenAI image generator. Just include a prompt and a size to get started.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ bottom: '0' }}>
                        <Button component={Link} to={'/imagegenerator'} size="small">Generate images</Button>
                    </CardActions>
                </Card>
                <Card sx={{ width: '20em', height: '28em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Text completion
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            You: When did the first airplane fly? <br></br>
                            Marv: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.  <br></br>
                            You: What is the meaning of life?  <br></br>
                            Marv: I’m not sure. I’ll ask my friend Google.  <br></br>
                            You: Why is the sky blue?  <br></br>
                        </Typography>
                        <Typography variant="body2">
                            Generate text with OpenAI text completion. Just include a prompt. (Response length is limited)
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to={'/completiongenerator'} size="small">Generate text</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}
