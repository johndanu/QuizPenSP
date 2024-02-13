import React from 'react';
import { Box, Button, Card, Container, LinearProgress, Stack, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

function SingleQuestionView() {
    return (
        <Container sx={{ p: 3 }} >
            <Stack spacing={7}>
                <Stack direction='row' alignItems='center' sx={{ width: '100%' }}>
                    <Icon icon="noto:heavy-multiplication-x" width="16" height="16" />
                    <Box sx={{ flex: 1, mx: 1 }}><LinearProgress variant="determinate" /></Box>
                    <Typography variant='body1'>10/40</Typography>
                </Stack>
                <Card sx={{ backgroundColor: '#d5f9ff', mt: 3, p: 2, borderRadius: 3 }}>
                    <Typography variant='h5'>What is the most popular sport?</Typography>
                </Card>
                <Stack sx={{ mt: 3 }} spacing={3}>
                    <Card sx={{ pt: 1, pl: 2, height: 40, borderRadius: 3 }}>
                        <Typography textAlign='left' variant='h6'>Volley Ball</Typography>
                    </Card>
                    <Card sx={{ pt: 1, pl: 2, height: 40, borderRadius: 3 }}>
                        <Typography textAlign='left' variant='h6'>Foot Ball</Typography>
                    </Card>
                    <Card sx={{ pt: 1, pl: 2, height: 40, borderRadius: 3 }}>
                        <Typography textAlign='left' variant='h6'>Basket Ball</Typography>
                    </Card>
                    <Card sx={{ pt: 1, pl: 2, height: 40, borderRadius: 3 }}>
                        <Typography textAlign='left' variant='h6'>Badminton</Typography>
                    </Card>
                </Stack>
                <Stack sx={{ mt: 3 }}>
                    <Card sx={{ height: 50, borderRadius: 3, justifyContent: 'center', alignItems: 'center', display: 'flex', backgroundColor: '#00bad8' }}>
                        <Typography variant='h6' color='#ffff' textAlign='center'>Next</Typography>
                    </Card>
                </Stack>
            </Stack>
        </Container>
    )
}
export default SingleQuestionView
