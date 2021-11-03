import React from 'react';
import {
        Grid,
        Paper,
        Avatar,
        TextField,
        Button,
        FormControlLabel,
        Checkbox
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SignUp = () => {
    const paperStyle = {padding: 20, height:'70hv', width: 320, margin: '20 auto'};
    const avatarStyle = {background: '#38df38'};
    const emailStyle = {margin_bottom: 10};
    const btnStyle = {margin: '20px 0'};

    return (
        <Grid align="center">
            <Paper elevation={3} style={paperStyle}>
                <Grid align="center" direction="column" justifyContent="center" alignItems="center">
                    <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField id="standard-basic" label="Name" variant="standard" placeholder="Enter Your Name" fullWidth  required />
                <TextField id="standard-basic" label="Email" variant="standard" placeholder="Enter Your Email" fullWidth  required />
                <TextField id="standard-basic" label="Password" variant="standard" placeholder="Enter Password" fullWidth required   />
                <TextField id="standard-basic" label="Confirm Password" variant="standard" placeholder="Confirm Your Password" fullWidth required   />
                <FormControlLabel control={<Checkbox defaultChecked />} label="I accept the terms and conditions" />
                <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle}>Sign Up</Button>
                
            </Paper>
        </Grid>
    )
}

export default SignUp;