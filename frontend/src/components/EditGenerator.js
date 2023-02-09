import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    FormControl,
    TextField,
    CircularProgress,
} from "@mui/material";
import axios from "axios";
const divStyle = {
    textAlign: "center",
    backgroundColor: "#a42cd6",
    height: "80vh",
};

export default function EditGenerator() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const [instructionResponse, setInstructionResponse] = useState("");
    const [response, setResponse] = useState("");
    // const [finishReason, setFinishReason] = useState('')
    const [instruction, setInstruction] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setError("");
        if (!text) {
            setError("Write some text to generate an edit");
        } else {
            axios
                .post(`http://localhost:5000/openai/generateEdit`, {
                    prompt: text,
                    instruction,
                })
                .then(function (response) {
                    setDescription(response.data.prompt);
                    setInstructionResponse(response.data.instruction);
                    setResponse(response.data.data);
                    // setFinishReason(response.data.finish_reason)
                    setText("");
                    setInstruction("");
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    return (
        <div style={divStyle}>
            <Box
                sx={{
                    flexGrow: 1,
                    textAlign: "center",
                    backgroundColor: "#A42CD6",
                    pt: "5em",
                }}
            >
                <FormControl>
                    <Typography variant="h3" sx={{}}>
                        Generate an edit
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                            margin="normal"
                            required
                            fullWidth
                            variant="filled"
                            id="text"
                            label="Prompt"
                            name="text"
                            sx={{ backgroundColor: "white" }}
                        />
                        <TextField
                            value={instruction}
                            onChange={(event) =>
                                setInstruction(event.target.value)
                            }
                            margin="normal"
                            required
                            fullWidth
                            variant="filled"
                            id="text"
                            label="Instructions"
                            name="text"
                            sx={{ backgroundColor: "white" }}
                        />
                        <Button
                            disabled={
                                loading || text === "" || instruction === ""
                            }
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Generate
                        </Button>
                        <Typography>{error}</Typography>
                    </Box>
                </FormControl>
            </Box>
            <Box sx={{ textAlign: "center", pt: "2em" }}>
                {loading && <CircularProgress></CircularProgress>}
                <br></br>
                {!loading && (
                    <>
                        <Typography
                            sx={{ color: "#24292f", fontWeight: "bold" }}
                        >
                            Prompt: {description}
                        </Typography>
                        <Typography
                            sx={{ color: "#24292f", fontWeight: "bold" }}
                        >
                            Instructions: {instructionResponse}
                        </Typography>
                        <Typography
                            sx={{ color: "#24292f", fontWeight: "bold" }}
                        >
                            Response: {response}
                        </Typography>
                    </>
                )}
                {/* {finishReason !== 'length' ? <></> : <Alert severity="error" sx={{ width: '30%', ml: '35%' }}>The response was too long to generate completely. Try a simpler prompt next time.</Alert>} */}
            </Box>
        </div>
    );
}
