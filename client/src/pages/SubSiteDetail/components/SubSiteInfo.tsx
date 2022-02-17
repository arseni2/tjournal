import React from 'react';
import {Avatar, Grid} from "@mui/material";
import Button from "../../../components/Button";


const SubSiteInfo = (props: any) => {
    return (
        <Grid>
            <Grid display={'flex'} justifyContent={'space-between'}>
                <Avatar
                    src={'https://leonardo.osnova.io/b5dd5863-6867-44ab-498f-b98e45ad142a/-/scale_crop/200x200/-/format/webp'}
                    variant={'rounded'} sx={{width: 120, height: 120}}/>
                <Button colorFont={'#fff'} bgcolor={'#4683d9'}
                        bgcolorDarken={'#2a5fa4'} width={130}>
                    Подписаться
                </Button>
            </Grid>
        </Grid>
    );
};

export default React.memo(SubSiteInfo);