import React from 'react';
import {Avatar, Grid, Typography} from "@mui/material";
import ProfileDescription from "./ProfileDescription";


const ProfileInfo = (props: any) => {
    return (
        <Grid bgcolor={'#fff'} mt={1} borderRadius={2} height={341} p={2.5}>
            <Avatar
                src={'https://leonardo.osnova.io/b1f22755-7356-50c9-8445-41e88dd8bb24/-/scale_crop/200x200/-/format/webp'}
                variant={'rounded'} sx={{width: 112, height: 112}}/>
            <Typography fontSize={36} fontWeight={700}>
                Арсений долгий Arc
            </Typography>
            <ProfileDescription />
        </Grid>
    );
};

export default React.memo(ProfileInfo);