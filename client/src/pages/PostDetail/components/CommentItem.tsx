import {Avatar, Grid, Typography} from '@mui/material';
import React, {useState} from 'react';
import {commentI} from "./CommentContainer";
import {styled} from "@mui/system";
import CreateCommentForm from './CommentCreateForm'


interface PropsI {
    comment: commentI
}

const CommentAnswerTypography = styled(Typography)(() => ({
    fontSize: 14,
    color: '#595959',
    '&:hover': {
        color: '#4683d9'
    },
    cursor: 'pointer'
}))

const CommentItem = (props: PropsI) => {
    const [isAnswer, setIsAnswer] = useState(false)

    const nestedComments = (props.comment.children || []).map((comment: commentI) => {
        return <CommentItem key={comment.id} comment={comment}/>
    })
    const handleClickAnswer = () => setIsAnswer(!isAnswer)
    return (
        <Grid mt={1}>
            <Grid display={'flex'}>
                <Avatar src={'https://gif.cmtt.space/3/user-userpic/33/5b/0ca0369265.png'}/>
                <Grid ml={1}>
                    <Typography fontWeight={600}>
                        {props.comment.author}
                    </Typography>
                    <Typography fontSize={12} color={'#595959'}>
                        10 фев
                    </Typography>
                </Grid>
            </Grid>
            <Typography>
                {props.comment.text}
            </Typography>
            <Grid>
                <CommentAnswerTypography onClick={handleClickAnswer}>
                    Ответить
                </CommentAnswerTypography>
                {isAnswer && <CreateCommentForm />}
            </Grid>
            <div style={{marginLeft: 20}}>
                {nestedComments}
            </div>
        </Grid>
    )
};

export default React.memo(CommentItem);