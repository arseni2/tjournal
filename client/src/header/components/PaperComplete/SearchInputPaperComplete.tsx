import React from 'react';
import {Paper} from "@mui/material";
import PaperCompleteRecentlyContainer from "./PaperCompleteRecentlyContainer";
import PaperCompleteFoundContainer from "./PaperCompleteFoundContainer";

interface PropsI {
    open: boolean
}
const SearchInputPaperComplete = (props: PropsI) => {
    return (
        <Paper style={{display: `${props.open ? 'block' : 'none'}`, width: 270, position: 'absolute', height: 200, padding: 5}}>
            <PaperCompleteRecentlyContainer />
            <PaperCompleteFoundContainer />
        </Paper>
    );
};

export default React.memo(SearchInputPaperComplete);