import React from 'react';
import {styled} from "@mui/system";
import {Grid} from "@mui/material";


const GridStyled = styled(Grid)(() => ({
    '&:hover': {
        background: '#f2f2f2',
        borderRadius: 6
    },
    padding: 6,
    cursor: 'pointer',
    display: 'flex',
    paddingRight: 8,
    paddingLeft: 8
}))
const PaperCompleteContainer = (props: any) => {
    return (
        <GridStyled zIndex={999999999999999}>
            {props.children}
        </GridStyled>
    );
};

export default React.memo(PaperCompleteContainer);