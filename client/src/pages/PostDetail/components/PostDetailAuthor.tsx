import React from 'react';
import {Avatar, Grid, Typography} from "@mui/material";
import Button from "../../../components/Button";


const PostDetailAuthor = (props: any) => {
    return (
        <Grid mt={3} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Grid display={'flex'} alignItems={'center'}>
                <Avatar variant={'rounded'}
                        src={'https://leonardo.osnova.io/3887ab74-4082-5ac6-9fc9-caace11b7cfd/-/scale_crop/108x108/-/format/webp'}/>
                <Typography fontSize={18} fontWeight={600} ml={2}>
                    Sasha Shambilova
                </Typography>
            </Grid>
            <Button colorFont={'#fff'} bgcolor={'#4683d9'}
                    bgcolorDarken={'#2a5fa4'}>
                Подписаться
            </Button>
        </Grid>
    );
};

export default React.memo(PostDetailAuthor);