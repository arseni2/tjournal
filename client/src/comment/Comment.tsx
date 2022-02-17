import {Grid} from '@mui/material';
import React from 'react';
import CommentTitle from "./components/CommentTitle";
import CommentItem from "./components/CommentItem";
import {styled} from "@mui/system";


const CommentContainerGrid = styled(Grid)(() => ({
    '&::-webkit-scrollbar': {
        width: 0,  /* Remove scrollbar space */
        background: 'transparent',  /* Optional: just make scrollbar invisible */
    }
}))
const Comment = (props: any) => {
    console.log('COMMENT RERENDER')
    return (
        <Grid width={'100%'} position={'sticky'} top={84} height={'auto'}>
            <Grid height={850}>
                <CommentTitle/>
                <CommentContainerGrid mt={1} style={{height: 835}} overflow={'auto'}>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                </CommentContainerGrid>
            </Grid>
        </Grid>
    );
};

export default React.memo(Comment);