import React, { useState } from 'react'
import { Box, AppBar, Typography, Button, Toolbar, Link, FormControl, TextField, Select, MenuItem } from '@mui/material'
import axios from 'axios'

function App() {
    const [error, setError] = useState('')
    const [text, setText] = useState('')
    const [size, setSize] = useState('small');
    const [image, setImage] = useState('')
    const handleChange = (event) => {
        setSize(event.target.value);
    };
    async function handleSubmit(event) {
        event.preventDefault()
        setText('')
        setError('')
        if (!text) {
            setError('Write some text to generate an image')
        } else {
            axios.post(`http://localhost:${process.env.REACT_APP_PORT}/openai/generateImage`, {
                prompt: text,
                size: size
            })
                .then(
                    function (response) {
                        setImage(response.data.data)
                    }
                )
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    return (
        <div className="App">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ height: '5em', backgroundColor: '#24292f' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: '1em', marginLeft: '1em' }}>
                            OpenAI Image Generator
                        </Typography>
                        <Link variant="h6" underline="hover" href="https://beta.openai.com/overview" target='_blank' rel="noreferrer" sx={{ color: 'white', paddingTop: '1em' }}>
                            OpenAI website
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ flexGrow: 1, textAlign: 'center', backgroundColor: '#A42CD6', pt: '5em' }}>
                <FormControl>
                    <Typography variant="h3" sx={{}}>Generate an image</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            value={text}
                            onChange={event => setText(event.target.value)}
                            margin="normal"
                            required
                            fullWidth
                            variant="filled"
                            id="text"
                            label="Image to generate"
                            name="text"
                            sx={{ backgroundColor: 'white' }}
                        />
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            label="Size"
                            onChange={handleChange}
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value={'small'}>Small (256x256)</MenuItem>
                            <MenuItem value={'medium'}>Medium (512x512)</MenuItem>
                            <MenuItem value={'large'}>Large (1024x1024)</MenuItem>
                        </Select>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Generate
                        </Button>
                        <Typography>
                            {error}
                        </Typography>
                    </Box>
                </FormControl>
            </Box>
            <Box sx={{ textAlign: 'center', pt: '2em' }}>
                <img src={image} alt="">
                </img>
            </Box>
        </div >
    );
}

export default App;
