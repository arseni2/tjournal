import React from 'react';
import {styled} from "@mui/system";

interface ButtonI extends React.HTMLAttributes<HTMLDivElement> {
    bgcolor?: string
    colorFont?: string
    bgcolorDarken?: string
    width?: string | number
    textAlign?: 'center' | 'left' | 'right' | 'justify' | 'start'
}
const ButtonStyled = styled('div')((props: ButtonI) => ({
    background: props.bgcolor ?? 'white',
    color: props.colorFont ?? 'black',
    boxShadow: '0 1px 1px rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 10%), 1px 0 0 rgb(0 0 0 / 10%)',
    textTransform: 'none',
    cursor: 'pointer',
    padding: 8,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 12,
    paddingRight: 12,
    transition: '0.2s background',
    '&:hover': {
        background: props.bgcolorDarken ?? '#f1f1f1'
    },
    fontFamily: 'Open Sans',
    fontWeight: 600,
    letterSpacing: -0.5,
    height: 40,
    width: props.width,
    textAlign: props.textAlign ?? undefined,
    userSelect: 'none'
}))
const Button = (props: ButtonI) => {
    return <ButtonStyled {...props}>
            {props.children}
        </ButtonStyled>
};

export default React.memo(Button);