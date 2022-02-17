import React from 'react';
import {Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PaperCompleteContainer from "./PaperCompleteContainer";


const PaperCompleteRecentlyItem = (props: any) => {
    return (
        <PaperCompleteContainer>
            <SearchIcon />
            <Typography pl={1}>
                text
            </Typography>
        </PaperCompleteContainer>
    );
};

export default React.memo(PaperCompleteRecentlyItem);