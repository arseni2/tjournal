import React from 'react';
import {Grid} from "@mui/material";


const AuthContainer = (props: any) => {
    return (
        <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} height={'60vh'} flexDirection={'column'} bgcolor={'#f2f2f2'}>
            {props.children}
        </Grid>
    );
};

export default React.memo(AuthContainer);