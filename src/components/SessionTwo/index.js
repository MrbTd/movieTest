import React from 'react'
import { Avatar, Box, Button, Typography, Grid } from '@mui/material'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image from '../../assets/film.jpeg'
import image2 from '../../assets/film2.jpg'
import AddIcon from '@mui/icons-material/Add';

const DATA = [
    { img: image2, label: 'JUMANJI', title: 'ACTION,ADVENTURE,COMEDY' },
    { img: image2, label: 'JUMANJI', title: 'ACTION,ADVENTURE,COMEDY' },
    { img: image2, label: 'JUMANJI', title: 'ACTION,ADVENTURE,COMEDY' },
    { img: image2, label: 'JUMANJI', title: 'ACTION,ADVENTURE,COMEDY' },
]

const SessionTwo = () => {
    return (
        <Box component="div" sx={{ m: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ color: "#BABFC8", fontWeight: 'bold' }}>TV Series</Typography>
                <Typography variant="body1" sx={{ ml: 2, color: "#65657C", fontWeight: 'bold' }}>Movies</Typography>
                <Typography variant="body1" sx={{ ml: 2, color: "#BABFC8", fontWeight: 'bold' }}>Animés</Typography>
            </Box>
            <Box sx={{ m: 2 }}>
                <Carousel infiniteLoop showStatus={false} autoPlay showIndicators={false} showThumbs={false} interval={5000} transitionTime={500}>
                    {Array.from('aaaaaaaa').map(val => (
                        <Box component="div">
                            <Box component="div" sx={{
                                height: 500, borderRadius: 8, backgroundImage: `url(${image})`, backgroundSize: 'cover', p: 2
                            }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 430 }}>
                                    <Box sx={{ display: 'flex' }}>
                                        <Avatar alt="Remy Sharp" src={image} sx={{ width: 20, height: 20 }} />
                                        <Avatar alt="Travis Howard" src={image} sx={{ width: 20, height: 20 }} />
                                        <Avatar alt="Cindy Baker" src={image} sx={{ width: 20, height: 20 }} />
                                        <Typography variant="body1" color="white">la vie est belle</Typography>
                                    </Box>
                                    <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Typography variant="h3" color="white" sx={{ textAlign: "left" }}>JUMANJI</Typography>
                                        <Typography variant="subtitle" color="white" sx={{ textAlign: "left" }}>ATION,ADVENTURE,COMEDY</Typography>
                                        <Box sx={{ display: 'flex' }}>
                                            <Button variant="contained" elevation={0} color="error">Watch</Button>
                                            <Box sx={{ width: 50, height: 50, backgroundColor: 'rgba(225, 225, 225,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 3 }}><AddIcon sx={{ color: 'white' }} /></Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Box>
            <Box>
                <Typography variant="body1" sx={{ color: "#5B5B73", fontWeight: 'bold' }}>Best Artist</Typography>

                <Box sx={{ marginLeft: 5 }}>
                    <Grid container >
                        {DATA.map(val => (
                            <Grid item md={3}>
                                <Box component="img"
                                    sx={{
                                        maxHeight: { xs: 320 },
                                        borderRadius: 3
                                    }}
                                    alt="The house from the offer."
                                    src={val.img}
                                />
                                <Box sx={{ width: 50, height: 50, backgroundColor: 'rgba(225, 225, 225,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 3, position: 'relative', top: -310, right: -140 }}><AddIcon sx={{ color: 'white' }} /></Box>
                                <Box sx={{ position: 'absolute', bottom: 100, marginLeft: 6, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography component="subtitle">Ariana grande</Typography>
                                    <Typography component="subtitle">+12 movies</Typography>

                                </Box>

                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

        </Box >
    )
}

export default SessionTwo