import React, { useState } from 'react';
import { Box, Typography, Button, FormControl, TextField, Select, MenuItem, CircularProgress } from '@mui/material';
import axios from 'axios';

const divStyle = {
    textAlign: 'center',
    backgroundColor: '#a42cd6',
    minHeight: '80vh'
}

export default function ImageGenerator() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [text, setText] = useState('')
    const [size, setSize] = useState('small');
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const handleChange = (event) => {
        setSize(event.target.value);
    };
    async function handleSubmit(event) {
        event.preventDefault()
        setLoading(true)
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
                        setDescription(response.data.prompt)
                        setText('')
                        setLoading(false)
                    }
                )
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    async function generateRandom(event) {
        event.preventDefault()
        setLoading(true)
        setError('')
        axios.get(`http://localhost:${process.env.REACT_APP_PORT}/openai/generateImage`, {
        })
            .then(
                function (response) {
                    setImage(response.data.data)
                    setDescription(response.data.prompt)
                    setText('')
                    setLoading(false)
                }
            )
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div style={divStyle}>
            <Box sx={{ flexGrow: 1, textAlign: 'center', pt: '5em' }}>
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
                            disabled={loading || text === ''}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Generate
                        </Button>
                        <Button
                            disabled={loading}
                            fullWidth
                            onClick={generateRandom}
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Generate a random animal image
                        </Button>
                        <Typography>
                            {error}
                        </Typography>
                    </Box>
                </FormControl>

            </Box>
            <Box sx={{ textAlign: 'center', pt: '2em' }}>
                {loading && <CircularProgress></CircularProgress>}<br></br>
                {!loading &&
                    <>
                        <img src={image} alt="">
                        </img>
                        <Typography>{description}</Typography>
                    </>}
            </Box>
        </div>
    )
}
