import React from 'react';
import {useFormik} from "formik";
import {Grid, TextField} from "@mui/material";


const SignUpForm = (props: any) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            full_name: ''
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
                <TextField
                    name={'full_name'}
                    placeholder={'full name'}
                    onChange={formik.handleChange}
                    value={formik.values.full_name}
                    style={{marginTop: 10}}
                    inputProps={{ maxLength: 30 }}
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

export default React.memo(SignUpForm);