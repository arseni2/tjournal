import React from 'react';
import {Grid, Typography} from "@mui/material";
import SubContainerRecommendedItem from "./SubContainerRecommendedItem";


const SubContainerRecommended = (props: any) => {
    return (
        <Grid>
            <Typography color={'#595959'} fontSize={14}>
                Рекомендовано
            </Typography>
            <SubContainerRecommendedItem />
            <SubContainerRecommendedItem />
            <SubContainerRecommendedItem />
            <SubContainerRecommendedItem />
        </Grid>
    );
};

export default React.memo(SubContainerRecommended);