import React from 'react';
import {Grid, Typography} from "@mui/material";
import CommentCreateForm from "./CommentCreateForm";
import CommentContainer from "./CommentContainer";


const Comment = (props: any) => {
    const commentFakeData = [
        {
            id: 1,
            text: "Example comment here.",
            author: "user2",
            children: [
                {
                    id: 2,
                    text: "Another example comment text.",
                    author: "user3",
                    children: [
                        {
                            id: 3,
                            text: "Another example comment text.",
                            author: "user4",
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            text: "Example comment here 2.",
            author: "user5",
            children: []
        }
    ]
    return (
        <Grid bgcolor={'#fff'} mt={3.5} borderRadius={4} p={4}>
            <Typography fontSize={18} fontWeight={600} mb={2}>
                345 Комментариев
            </Typography>
            <CommentCreateForm/>
            <CommentContainer commentData={commentFakeData} />
        </Grid>
    );
};

export default React.memo(Comment);