import React from 'react';
import {Grid} from "@mui/material";
import AddCover from "./components/AddCover";
import ProfileInfo from "./components/ProfileInfo";
import Followers from "./components/Followers";
import Subscribers from "./components/Subscribers";
import {useSetContentWidth} from "../../utils/hooks";


export interface useOutletContextInterface {
    setContentWidth: (width: number) => void
}

const ProfilePage = (props: any) => {
    useSetContentWidth(960)
    return (
        <Grid>
            <AddCover/>
            <ProfileInfo/>
            <Grid display={'flex'}>
                <Followers/>
                <Subscribers/>
            </Grid>
        </Grid>
    );
};

export default React.memo(ProfilePage);