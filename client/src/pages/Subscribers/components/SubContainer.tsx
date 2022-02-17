import React from 'react';
import {Grid} from "@mui/material";
import SubContainerItem from "./SubContainerItem";


const SubContainer = (props: any) => {
    return (
        <Grid>
            <SubContainerItem />
            <SubContainerItem />
            <SubContainerItem />
            <SubContainerItem />
        </Grid>
    );
};

export default React.memo(SubContainer);