import React from 'react';
import {Grid, Typography} from "@mui/material";
import PaperCompleteRecentlyItem from "./PaperCompleteRecentlyItem";

const PaperCompleteRecentlyContainer = (props: any) => {
    return (
        <Grid>
            <Typography fontSize={14} color={'#595959'} gutterBottom pl={1}>
                Недавние запросы
            </Typography>
            <PaperCompleteRecentlyItem />
        </Grid>
    );
};

export default React.memo(PaperCompleteRecentlyContainer);