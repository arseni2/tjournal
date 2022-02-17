import React from 'react';
import {Grid, Paper} from "@mui/material";
import PostHeader from "./PostHeader";
import PostRating from "./PostRating";
import PostIcons from "./PostIcons";
import NavLinkStyled from "./NavLinkStyled";


const Post = (props: any) => {
    return (
        <NavLinkStyled to={'/post/111'}>
            <Paper elevation={0} sx={{mt: 1}} style={{padding: 20, cursor: 'pointer'}}>
                <PostHeader/>
                <Grid display={'flex'} justifyContent={'center'}>
                    <img
                        src="https://leonardo.osnova.io/7e5e2764-9d16-590c-b841-cb9b59007b5c/-/preview/850/-/format/webp/"
                        alt="" style={{width: '100%'}}/>
                </Grid>
                <Grid display={'flex'} mt={2.5} justifyContent={'space-between'}>
                    <PostIcons isShowRepost/>
                    <PostRating/>
                </Grid>
            </Paper>
        </NavLinkStyled>
    );
};

export default React.memo(Post);