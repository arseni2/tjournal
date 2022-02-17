import React from 'react';
import {Grid} from "@mui/material";
import SubSiteInfo from "./components/SubSiteInfo";
import SubSiteDescription from "./components/SubSiteDescription";
import Followers from "../Profile/components/Followers";
import Subscribers from "../Profile/components/Subscribers";
import {useSetContentWidth} from "../../utils/hooks";


const SubSiteDetailPage = (props: any) => {
    useSetContentWidth(960)
    return (
        <Grid>
            <Grid bgcolor={'#fff'} p={2.5} borderRadius={4}>
                <SubSiteInfo/>
                <SubSiteDescription/>
            </Grid>
            <Grid display={'flex'} mt={1}>
                <Followers/>
                <Subscribers/>
            </Grid>
        </Grid>
    );
};

export default React.memo(SubSiteDetailPage);