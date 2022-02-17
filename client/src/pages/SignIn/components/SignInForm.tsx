import React from 'react';
import {useFormik} from "formik";
import {Grid, TextField} from "@mui/material";


const SignInForm = (props: any) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid display={'flex'} flexDirection={'column'}>
                <TextField
                    name={'email'}
                    placeholder={'email'}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    style={{marginTop: 10}}
                />
                <TextField
                    name={'password'}
                    placeholder={'password'}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type={'password'}
                    style={{marginTop: 10}}
                />
                <Grid display={'flex'} justifyContent={'flex-end'} mt={1}>
                    <button type={'submit'} style={{height: 30, cursor: 'pointer'}}>
                        submit
                    </button>
                </Grid>
            </Grid>
        </form>
    );
};

export default React.memo(SignInForm);