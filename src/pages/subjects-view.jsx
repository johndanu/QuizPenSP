import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';

function SubjectsView() {
    const baseURL = import.meta.env.VITE_API_URL;
    const [allSubjects, getAllSubjects] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getSubjects = () => {
        axios
            .get(`${baseURL}subjects`)
            .then((response) => {
                getAllSubjects(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
                setIsLoading(false);
            });
    }
    useEffect(() => {
        setIsLoading(true);
        getSubjects();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            {isLoading ? (
                <Typography>Loading...</Typography>
            ) : (
                <>
                    <Stack direction="row" spacing={'auto'} alignItems="center" paddingTop='5vh'>
                        <Stack direction="column" spacing={2} sx={{ alignItems: 'left' }}>
                            <Typography variant="h2">Hi, John</Typography>
                            <Typography variant="h4">Let's make this day productive</Typography>
                        </Stack>
                        <Avatar alt="Travis Howard" src="src/assets/avatar.jpg" sx={{ height: '13vh', width: '10vh' }} />
                    </Stack>
                    <Grid>
                        <Card sx={{ p: 5, m: 8, borderRadius: 8,}}>
                            <Grid container spacing={0}>
                                <Grid item xs={6} >
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Icon icon="game-icons:rank-3" width="50" height="50" style={{ color: '#ffc200' }} />
                                        <Box sx={{ ml: 4 }}>
                                            <Typography variant="h5">Ranking</Typography>
                                            <Typography variant="h4" sx={{ fontFamily: 'Verdana', color: '#10beda' }}>100</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Divider orientation="vertical" flexItem />
                                <Grid item xs={6}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Icon icon="vaadin:coins" width="50" height="50" style={{ color: '#ffc200' }} />
                                        <Box sx={{ ml: 4 }}>
                                            <Typography variant="h5">Points</Typography>
                                            <Typography variant="h4" sx={{ fontFamily: 'Verdana', color: '#10beda' }}>100</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid Container spacing={5} sx={{ mt: 5, display: 'flex', flexWrap: 'wrap' }} justifyContent="center"  >
                        {allSubjects &&
                            allSubjects.map((subject, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <Card sx={{ width: '30vh', boxShadow: 5, m: 3, height: 'auto', borderRadius: 3, }}>
                                        <CardActionArea>
                                            <Box sx={{ position: 'absolute', filter: 'drop-shadow(30px 30px 20px rgba(192,192,192, 0.8))' }}>
                                                <CardMedia
                                                    component="img"
                                                    height='150vh'
                                                    image="src/assets/png1.png"
                                                    alt="green iguana"
                                                    sx={{ position: 'relative', zIndex: 1, background: 'transparent', border: 'none' }}
                                                />
                                            </Box>
                                            <Box>
                                                <CardContent sx={{ pt: 20 }}>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {subject.subjectName}
                                                    </Typography>
                                                </CardContent>
                                            </Box>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                    </Grid>
                </>
            )}


        </Container>
    )
}

export default SubjectsView
