import React from 'react';
import {Avatar, Grid, ListItemText, Typography} from "@mui/material";

interface PropsI {
    community: { src: string, title: string }
}

const CreatePostDialogSelectItem = (props: PropsI) => {
    return (
        <Grid display={'flex'}>
            <Grid>
                <Avatar variant={'rounded'} src={props.community.src} sx={{width: 22, height: 22}}/>
            </Grid>
            <Grid pl={1}>
                <ListItemText primary={props.community.title}/>

                <Typography color={'#595959'} fontSize={14}>
                    441 973 подписчика
                </Typography>
            </Grid>
        </Grid>
    );
};

export default React.memo(CreatePostDialogSelectItem);