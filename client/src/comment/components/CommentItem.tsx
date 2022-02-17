import React from 'react';
import {Avatar, Grid, Typography} from "@mui/material";

const CommentItem = (props: any) => {
    return (
        <Grid mt={2}>
            <Grid display={'flex'} alignItems={'center'} mb={0.5}>
                <Avatar
                    src={'https://leonardo.osnova.io/6cb747b2-ebcf-5320-83d9-365472dffbdc/-/scale_crop/64x64/-/format/webp'}
                    variant={'rounded'}
                    sx={{width: 24, height: 24}}
                />
                <Typography fontWeight={600} fontSize={14} ml={1}>
                    Джонни Мнемоников
                </Typography>
            </Grid>

            <Grid>
                <Typography gutterBottom style={{overflow: "hidden", textOverflow: "ellipsis"}}>
                    comment body comment body comment body comment body comment body comment body comment body
                    comment bodycomment bod
                </Typography>
                <Typography fontWeight={600} fontSize={14}>
                    Запись в подсайте Twitter
                </Typography>
            </Grid>
        </Grid>
    );
};

export default React.memo(CommentItem);