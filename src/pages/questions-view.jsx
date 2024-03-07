import React from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

function QuestionsView() {
  return (
    <Container >
        <Grid sx={{backgroundColor:'#0095af'}}>
            <Stack direction='row' alignItems='center' sx={{ width: '100%' }}>
            <Icon icon="ion:chevron-back"  style={{color: white}} />
                <Typography variant='body1'>LeaderBoard</Typography>
            </Stack>
        </Grid>
        <Grid>
            <Typography>Lower</Typography>
        </Grid>
    </Container>
  )
}

export default QuestionsView
