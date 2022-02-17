import React from 'react';
import {Grid, Typography} from "@mui/material";


const SubSiteDescription = (props: any) => {
    return (
        <Grid mt={1}>
            <Typography fontSize={36} fontWeight={600}>
                Наука
            </Typography>
            <Typography gutterBottom>
                Церковь им. Илона Маска: космос, медицина, генетика, нобелевские премии и самые заметные открытия.
            </Typography>
            <Typography>
                443 664 подписчика
            </Typography>
        </Grid>
    );
};

export default React.memo(SubSiteDescription);