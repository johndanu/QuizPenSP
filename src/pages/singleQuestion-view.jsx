import React, { useEffect, useState } from 'react';
import { Box, Card, CircularProgress, Container, FormControl, FormControlLabel, LinearProgress, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import axios from "axios";

// ------------------------------------------------------------------------------

function SingleQuestionView() {

    const baseURL = import.meta.env.VITE_API_URL;
    const [singleQuestion, getSingleQuestion] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [correctOption, setCorrectOption] = useState(null);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const examId='65c31f7574fd3f427cc83236';
    const id= '65c37162f93721f5589aa16d';

    const handleOptionChange = (event) => {
        setSelectedOptionIndex(parseInt(event.target.value));
      };

    const fetchSingleQuestion = () => {
        axios
            .get(`${baseURL}questions/${examId}/${id}`)
            .then((response) => {
                getSingleQuestion(response.data);
                setCorrectOption(response.data.correctOptionIndex);
                console.log(response.data);
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
        fetchSingleQuestion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container sx={{ p: 3 }} >
            {isLoading ? (
                <Typography>Loading</Typography>
            ) : (              
                <Stack  spacing={5}>
                    <Stack direction='row' alignItems='center' sx={{ width: '100%' }}>
                        <Icon icon="noto:heavy-multiplication-x" width="16" height="16" />
                        <Box sx={{ flex: 1, mx: 1 }}><LinearProgress variant="determinate" /></Box>
                        <Typography variant='body1'>10/40</Typography>
                    </Stack>
                    <Box sx={{ position: 'relative', textAlign: 'center', mt: 3 }}>
                    <Box sx={{ position: 'relative', top: '40px' }}>
                        <CircularProgress
                            variant="determinate"
                            value={75} 
                            size={35}
                            sx={{                 
                                '& .MuiCircularProgress-svg': {
                                    circle: {
                                        stroke: '#0ebeda',
                                        strokeWidth: 3,
                                        strokeLinecap: 'round',
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                        
                                    },
                                },
                            }}
                        />
                        <Typography
                            variant="caption"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            75 {/* Adjust the value of the progress */}
                        </Typography>
                    </Box>
                    <Card sx={{ backgroundColor: '#d5f9ff', mt: 3, p: 2, borderRadius: 3 }}>
                        <Typography variant='h5'>{singleQuestion.questionText}</Typography>
                    </Card>
                    </Box>
                    <Stack sx={{ mt: 3 }} spacing={3}>
                    {singleQuestion.options.map((option, index) => (
                        <>                       
                        <FormControl
                            sx={{
                                height:'auto',
                                p:1,
                                border: 1,
                                borderRadius: 3,
                                borderColor:selectedOptionIndex === index && correctOption === index + 1 ? '#1ac5df' : selectedOptionIndex === index ? '#ff6a5f' : 'grey.300',
                                backgroundColor: selectedOptionIndex === index && correctOption === index + 1 ? '#d5f9ff' : selectedOptionIndex === index ? '#ffdedb' : 'transparent',    
                            }}
                            >                        
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"                          
                          name="radio-buttons-group"
                          value={selectedOptionIndex}
                          onChange={handleOptionChange}
                        >
                          <FormControlLabel
                            key={index} 
                            value={index} 
                            control={
                                <Radio 
                                  icon={
                                    <Icon icon="prime:circle" width="1.5em" height="1.5em"  style={{color:'#C6D5DB'}}/>
                                  }
                                  checkedIcon={
                                    index === correctOption-1 && selectedOptionIndex===index? 
                                    <Icon icon="mdi:tick-circle" width="1.5em" height="1.5em"   style={{color: '#0ebeda'}} /> : 
                                    index !== correctOption-1 && selectedOptionIndex===index && 
                                    <Icon icon="gridicons:cross-circle" width="1.5em" height="1.5em"  style={{color: '#ff3f32'}} />                                    
                                  }                                
                                />
                              } 
                            label={option} 
                            labelPlacement="start" 
                            sx={{                                
                                justifyContent:'space-between',
                                }}                               
                            />    
                        </RadioGroup>
                        </FormControl>
                      </>
                    ))}                        
                    </Stack>
                    <Stack sx={{ mt: 3 }}>
                        <Card sx={{ height: 50, borderRadius: 3, justifyContent: 'center', alignItems: 'center', display: 'flex', backgroundColor: '#00bad8' }}>
                            <Typography variant='h6' color='#ffff' textAlign='center'>Next</Typography>
                        </Card>
                    </Stack>
                </Stack>
                
            )}
        </Container>
    )
}
export default SingleQuestionView
