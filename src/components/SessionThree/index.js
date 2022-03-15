import SearchIcon from '@mui/icons-material/Search'; import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import jw from '../../assets/jw.jpg'
const SessionThree = () => {
    return (

        <Box component="div" sx={{ display: 'flex', flexDirection: 'column', m: 4 }}>
            <TextField
                placeholder="Search"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <Typography variant="body1" sx={{ color: "#5B5B73", fontWeight: 'bold', mt: 3 }}>Popular Movies</Typography>

            <Box sx={{ display: 'flex', mt: 1 }}>
                <Box component="img"
                    sx={{
                        maxHeight: { xs: 100 },
                        borderRadius: 3
                    }}
                    alt="The house from the offer."
                    src={jw}
                />
                <div style={{ marginLeft: 5, marginTop: 5 }}>
                    <Typography variant="body1">Movie bTd</Typography>
                    <Typography variant="body1">Action Horror</Typography>
                    <Typography variant="body1">Views 7.4</Typography>

                </div>
            </Box>
            <Box sx={{ display: 'flex', mt: 1 }}>
                <Box component="img"
                    sx={{
                        maxHeight: { xs: 100 },
                        borderRadius: 3
                    }}
                    alt="The house from the offer."
                    src={jw}
                />
                <div style={{ marginLeft: 5, marginTop: 5 }}>
                    <Typography variant="body1">Movie bTd</Typography>
                    <Typography variant="body1">Action Horror</Typography>
                    <Typography variant="body1">Views 7.4</Typography>

                </div>
            </Box>
            <Box sx={{ display: 'flex', mt: 1 }}>
                <Box component="img"
                    sx={{
                        maxHeight: { xs: 100 },
                        borderRadius: 3
                    }}
                    alt="The house from the offer."
                    src={jw}
                />
                <div style={{ marginLeft: 5, marginTop: 5 }}>
                    <Typography variant="body1">Movie bTd</Typography>
                    <Typography variant="body1">Action Horror</Typography>
                    <Typography variant="body1">Views 7.4</Typography>

                </div>
            </Box>
            <Box sx={{ display: 'flex', mt: 1 }}>
                <Box component="img"
                    sx={{
                        maxHeight: { xs: 100 },
                        borderRadius: 3
                    }}
                    alt="The house from the offer."
                    src={jw}
                />
                <div style={{ marginLeft: 5, marginTop: 5 }}>
                    <Typography variant="body1">Movie bTd</Typography>
                    <Typography variant="body1">Action Horror</Typography>
                    <Typography variant="body1">Views 7.4</Typography>

                </div>
            </Box>
            <Button variant="contained" disableElevation color="error" sx={{ borderRadius: 3, height: 50, mt: 2 }}>See More</Button>
            <Typography variant="body1" sx={{ color: "#5B5B73", fontWeight: 'bold', mt: 3 }}>Popular Movies</Typography>

            <Box sx={{ display: 'flex', mt: 1 }}>
                <Box component="img"
                    sx={{
                        maxHeight: { xs: 100 },
                        borderRadius: 3
                    }}
                    alt="The house from the offer."
                    src={jw}
                />
                <div style={{ marginLeft: 5, marginTop: 5 }}>
                    <Typography variant="body1">Movie bTd</Typography>
                    <Typography variant="body1">Action Horror</Typography>
                    <Typography variant="body1">Views 7.4</Typography>

                </div>
            </Box>


            <Box sx={{ display: 'flex', mt: 1 }}>
                <Box component="img"
                    sx={{
                        maxHeight: { xs: 100 },
                        borderRadius: 3
                    }}
                    alt="The house from the offer."
                    src={jw}
                />
                <div style={{ marginLeft: 5, marginTop: 5 }}>
                    <Typography variant="body1">Movie bTd</Typography>
                    <Typography variant="body1">Action Horror</Typography>
                    <Typography variant="body1">Views 7.4</Typography>

                </div>
            </Box>
        </Box>
    )
}

export default SessionThree