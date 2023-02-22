import Head from 'next/head';
import { signIn, useSession } from 'next-auth/react';
import { Button, Stack, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MainContainer = styled(Container)(({ theme }) => ({
    textAlign: 'center',
    marginBlock: theme.spacing(10),
}));

// TODO: need to make these state recoil atom
const slackOk = false;

function Login() {
    const { data: session } = useSession();

    console.log('session', session);

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <MainContainer>
                <Stack direction="column" marginBottom={5}>
                    <Typography variant="h5" marginBottom={1}>
                        Please login google and slack
                    </Typography>
                    <Typography variant="body1">
                        We would like to use them to create event on google calendar and send report to specific channel
                        on slack
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={3} justifyContent="center">
                    <Button
                        variant="outlined"
                        size="large"
                        color="info"
                        onClick={() => signIn()}
                        disabled={session ? true : false}
                        endIcon={session ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                    >
                        Google
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        color="info"
                        endIcon={slackOk ? <CheckCircleOutlineIcon /> : <CheckCircleIcon />}
                    >
                        Slack
                    </Button>
                </Stack>
            </MainContainer>
        </>
    );
}

export default Login;
