import React from 'react';
import Button from "../../../components/Button";
import {styled} from "@mui/system";
import {Grid, TextareaAutosize} from "@mui/material";


const TextAreaStyled = styled(TextareaAutosize)(() => ({
    width: '100%',
    resize: 'none',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: 16,
    fontFamily: 'inherit',
    maxWidth: 576,
}))
const CommentContainerGrid = styled(Grid)(() => ({
    border: '1px solid rgba(0,0,0,.03)',
    background: '#f7f7f7',
    padding: 11,
    borderRadius: 10,
    transition: '0.2s all',
    '&:hover': {
        boxShadow: '0 0 0 3px rgb(70 131 217 / 12%)',
        backgroundColor: '#fff',
        borderColor: '#bdd6fa'
    }
}))

const CommentCreateForm = (props: any) => {
    return (
        <CommentContainerGrid>
            <TextAreaStyled minRows={6} placeholder={'Напишите комментарий...'}/>
            <Button width={112} colorFont={'#fff'} bgcolor={'#4683d9'}
                    bgcolorDarken={'#2a5fa4'}>
                Отправить
            </Button>
        </CommentContainerGrid>
    );
};

export default React.memo(CommentCreateForm);