import React from 'react';
import {Grid} from "@mui/material";
import PaperCompleteFoundItem from "./PaperCompleteFoundItem";
import PaperCompleteGoToResult from "./PaperCompleteGoToResult";

const PaperCompleteFoundContainer = (props: any) => {
    return (
        <Grid>
            <PaperCompleteFoundItem />
            <PaperCompleteGoToResult />
        </Grid>
    );
};

export default React.memo(PaperCompleteFoundContainer);