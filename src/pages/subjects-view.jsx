import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";

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
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: 5, px: 2 }}
          >
            <Stack direction="column">
              <Typography variant="h4">Hi, John</Typography>
              <Typography variant="body2">
                Let's make this day productive
              </Typography>
            </Stack>
            <Avatar
              alt="Travis Howard"
              src="src/assets/avatar.jpg"
              sx={{ width: "70px", height: "70px" }}
            />
          </Stack>

          <Card
            sx={{
              py: 5,
              my: 2,
              borderRadius: 8,
              mx: "auto",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-around"
              alignItems="center"
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  icon="game-icons:rank-3"
                  width="40"
                  height="40"
                  style={{
                    color: "#ffc200",
                  }}
                />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h5">Ranking</Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontFamily: "Verdana", color: "#10beda" }}
                  >
                    100
                  </Typography>
                </Box>
              </Box>

              <Divider orientation="vertical" flexItem />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  icon="vaadin:coins"
                  width="40"
                  height="40"
                  style={{
                    color: "#ffc200",
                    display: { xs: "none", md: "block" },
                  }}
                />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h5">Points</Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontFamily: "Verdana", color: "#10beda" }}
                  >
                    100
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Card>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Let's play
          </Typography>
          <Grid container spacing={2}>
            {allSubjects &&
              allSubjects.map((subject, index) => (
                <Grid item key={index} xs={6} md={4} lg={3}>
                  <Card
                    sx={{
                      boxShadow: 5,
                      width: "100%",
                      height: "100%",
                      borderRadius: 3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="src/assets/png1.png"
                      alt="green iguana"
                      sx={{
                        width: "100%",
                        transition: "transform 0.5s ease",
                        "&:hover": {
                          transform: "scale(1.1)", // Scale the image up to 110% when hovered
                        },
                      }}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign="center"
                      >
                        {subject.subjectName}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </Container>
  );
}

export default SubjectsView;
