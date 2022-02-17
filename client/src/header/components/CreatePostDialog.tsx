import React, {useState} from 'react';
import {Avatar, Dialog, Grid, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CreatePostDialogSelect from "./CreatePostDialogSelect";
import CreatePostForm from "./CreatePostForm";


interface PropsI {
    open: boolean
    setOpen: (value: boolean) => void
}

const CreatePostDialog = (props: PropsI) => {
    const [isFullScreen, setFullScreen] = useState(false)
    return (
        <Dialog
            onClose={() => {
                props.setOpen(false)
            }}
            open={props.open}
            fullWidth
            PaperProps={{
                style: {
                    width: isFullScreen ? '100%' : 880,
                    height: isFullScreen ? '100%' : 700
                }
            }}
            maxWidth={'xl'}
        >
            {/*header*/}
            <Grid display={'flex'} justifyContent={'space-between'} pt={3}>
                <Grid display={'flex'} pl={11}>
                    <Grid style={{cursor: 'pointer'}} display={'flex'} pr={1}>
                        <CreatePostDialogSelect />
                    </Grid>
                    <Grid display={'flex'} pl={2}>
                        <Avatar src={'https://leonardo.osnova.io/b1f22755-7356-50c9-8445-41e88dd8bb24'}
                                variant={'rounded'} sx={{width: 22, height: 22}}/>
                        <Typography>
                            Арсений Долгий Arc
                        </Typography>
                    </Grid>
                </Grid>

                <Grid color={'#808080'}>
                    <CloseIcon style={{marginRight: 16}} cursor={'pointer'} onClick={() => {
                        props.setOpen(false)
                    }}/>
                    <OpenInFullIcon style={{marginRight: 8}} cursor={'pointer'} onClick={() => {
                        setFullScreen(!isFullScreen)
                    }}/>
                </Grid>
            </Grid>

            {/*editor*/}
            <Grid>
                <CreatePostForm />
            </Grid>
        </Dialog>
    );
};

export default React.memo(CreatePostDialog);