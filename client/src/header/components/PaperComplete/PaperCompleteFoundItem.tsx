import {Avatar, Typography} from '@mui/material';
import React from 'react';
import PaperCompleteContainer from "./PaperCompleteContainer";

const PaperCompleteFoundItem = (props: any) => {
    return (
        <PaperCompleteContainer display={'flex'}>
            <Avatar src={'https://leonardo.osnova.io/b5dd5863-6867-44ab-498f-b98e45ad142a/-/scale_crop/64x64/-/format/webp/'} variant="rounded" style={{width: 22, height: 22}} />
            <Typography pl={1}>
                title
            </Typography>
        </PaperCompleteContainer>
    );
};

export default React.memo(PaperCompleteFoundItem);