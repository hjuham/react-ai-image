import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    FormControl,
    TextField,
    CircularProgress,
    Alert,
} from "@mui/material";
import axios from "axios";

const divStyle = {
    textAlign: "center",
    backgroundColor: "#a42cd6",
    height: "80vh",
};
export default function CompletionGenerator() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const [response, setResponse] = useState("");
    const [finishReason, setFinishReason] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setError("");
        if (!text) {
            setError("Write some text to generate an image");
        } else {
            axios
                .post(
                    `${process.env.REACT_APP_BACKEND}/openai/generateCompletion`,
                    {
                        prompt: text,
                    }
                )
                .then(function (response) {
                    setDescription(response.data.prompt);
                    setResponse(response.data.data);
                    setFinishReason(response.data.finish_reason);
                    setText("");
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    return (
        <div style={divStyle}>
            <Box sx={{ flexGrow: 1, textAlign: "center", pt: "5em" }}>
                <FormControl>
                    <Typography variant="h3" sx={{}}>
                        Generate a response
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
                        <Button
                            disabled={loading || text === ""}
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
            <Box sx={{ textAlign: "center" }}>
                {loading && <CircularProgress></CircularProgress>}
                <br></br>
                {!loading && (
                    <>
                        <Typography
                            sx={{ color: "#24292f", fontWeight: "bold" }}
                        >
                            You: {description}
                        </Typography>
                        <Typography
                            sx={{ color: "#24292f", fontWeight: "bold" }}
                        >
                            AI: {response}
                        </Typography>
                    </>
                )}
                {finishReason !== "length" ? (
                    <></>
                ) : (
                    <Alert severity="error" sx={{ width: "30%", ml: "35%" }}>
                        The response was too long to generate completely. Try a
                        simpler prompt next time.
                    </Alert>
                )}
            </Box>
        </div>
    );
}
