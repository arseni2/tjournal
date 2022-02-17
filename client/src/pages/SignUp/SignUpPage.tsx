import React from 'react';
import AuthContainer from "../SignIn/components/AuthContainer";
import SignUpForm from "./components/SignUpForm";
import {Typography} from "@mui/material";


const SignUpPage = (props: any) => {
    return (
        <AuthContainer>
            <Typography fontSize={32} fontWeight={600} gutterBottom>
                Sign Up
            </Typography>
            <SignUpForm />
        </AuthContainer>
    );
};

export default React.memo(SignUpPage);