import React from 'react';
import {Grid} from "@mui/material";
import CommentItem from "./CommentItem";


export interface commentI {
    id: number
    text: string
    author: string
    children: Array<commentI>
}
interface PropsI {
    commentData: Array<commentI>
}

const CommentContainer = (props: PropsI) => {
    return (
        <Grid mt={2.5}>
            {props.commentData.map((comment, i) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </Grid>
    );
};

export default React.memo(CommentContainer);