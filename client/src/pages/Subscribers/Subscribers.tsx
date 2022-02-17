import React from 'react';
import {Grid} from "@mui/material";
import SubSearchInput from "./components/SubSearchInput";
import SubContainer from "./components/SubContainer";
import SubContainerRecommended from "./components/SubContainerRecommended";
import {useSetContentWidth} from "../../utils/hooks";


const SubscribersPage = (props: any) => {
    useSetContentWidth(640)
    return (
        <Grid bgcolor={'#fff'} p={2}>
            <SubSearchInput />
            <SubContainer />
            <SubContainerRecommended />
        </Grid>
    );
};

export default React.memo(SubscribersPage);