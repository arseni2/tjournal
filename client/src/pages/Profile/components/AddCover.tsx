import { Grid } from '@mui/material';
import React from 'react';
import Button from "../../../components/Button";

const AddCover = (props: any) => {
    return (
        <Grid bgcolor={'#fff'} borderRadius={2} height={71} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Button width={204} textAlign={'center'}>
                Добавить обложку
            </Button>
        </Grid>
    );
};

export default React.memo(AddCover);