import React from 'react';
import {Typography} from "@mui/material";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import PaperCompleteContainer from "./PaperCompleteContainer";


const PaperCompleteGoToResult = (props: any) => {
    return (
        <PaperCompleteContainer display={'flex'}>
            <KeyboardReturnIcon />
            <Typography pl={1}>
                Перейти к результатам
            </Typography>
        </PaperCompleteContainer>
    );
};

export default React.memo(PaperCompleteGoToResult);