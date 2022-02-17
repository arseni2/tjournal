import React from 'react';
import {Avatar, Grid, Typography} from "@mui/material";
import Button from "../../../components/Button";


const SubContainerRecommendedItem = (props: any) => {
    return (
        <Grid pt={2} pb={2} display={'flex'} justifyContent={'space-between'} borderTop={'1px solid #f2f2f2'}>
            <Grid display={'flex'} alignItems={'center'}>
                <Avatar variant={'rounded'}
                        src={'https://leonardo.osnova.io/eb7ddc5b-e4e0-9efa-e30a-4395555db9bf/-/scale_crop/64x64/-/format/webp'}
                />
                <Grid ml={1}>
                    <Typography fontWeight={600} fontSize={18}>
                        TJ
                    </Typography>
                    <Typography fontSize={14}>
                        description
                    </Typography>
                </Grid>
            </Grid>
            <Grid>
                <Button>
                    Подписаться
                </Button>
            </Grid>
        </Grid>
    );
};

export default React.memo(SubContainerRecommendedItem);