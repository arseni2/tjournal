import { Grid } from '@mui/material';
import React from 'react';
import Post from "../../../components/Post";

const Posts = (props: any) => {
    return (
        <Grid>
            <Post />
            <Post />
            <Post />
        </Grid>
    );
};

export default React.memo(Posts);