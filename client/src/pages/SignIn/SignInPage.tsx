import React from 'react';
import AuthContainer from "./components/AuthContainer";
import SignInForm from "./components/SignInForm";
import {Typography} from "@mui/material";


const SignInPage = (props: any) => {
    return (
        <AuthContainer>
            <Typography fontSize={32} fontWeight={600} gutterBottom>
                Sign In
            </Typography>
            <SignInForm />
        </AuthContainer>
    );
};

export default React.memo(SignInPage);