import React from 'react';
import {
        Grid,
        Paper,
        Avatar,
        TextField,
        Button,
        Typography,
        Link,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import SignUp from './SignUp'

const Login = () => {
    const paperStyle = {padding: 20, height:'70hv', width: 320, margin: '20 auto'};
    const avatarStyle = {background: 'green'};
    const emailStyle = {margin_bottom: 10};
    const btnStyle = {margin: '20px 0'};

    return (
        <Grid align="center">
            <Paper elevation={3} style={paperStyle}>
                <Grid align="center" direction="column" justifyContent="center" alignItems="center">
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField id="standard-basic" label="Username" variant="standard" placeholder="Enter Username" fullWidth  required />
                <TextField id="standard-basic" label="Password" variant="standard" placeholder="Enter Password" fullWidth required   />
                <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle}>Sign in</Button>
                <Typography>
                    <Link href="#">Forgot password ?</Link>
                </Typography>
                <Typography> Do you have an account ?
                    <Link href="#">Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;