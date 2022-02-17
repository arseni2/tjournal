import React, {useState} from 'react';
import {Avatar, Grid, Typography} from "@mui/material";
import Button from "../../../components/Button";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


const SubContainerItem = (props: any) => {
    const [isHoverBtn, setHoverBtn] = useState(false)
    const handleMouseMove = () => setHoverBtn(true)
    const handleMouseLeave = () => setHoverBtn(false)
    return (
        <Grid pt={2} pb={2} display={'flex'} justifyContent={'space-between'} borderTop={'1px solid #f2f2f2'}>
            <Grid display={'flex'} alignItems={'center'}>
                <Avatar variant={'rounded'}
                        src={'https://leonardo.osnova.io/eb7ddc5b-e4e0-9efa-e30a-4395555db9bf/-/scale_crop/64x64/-/format/webp'}
                        sx={{width: 30, height: 30}}/>
                <Typography ml={1} fontWeight={600} fontSize={18}>
                    TJ
                </Typography>
            </Grid>
            <Grid>
                <Button onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    {isHoverBtn ? <CloseIcon style={{color: '#E92A40'}}/> : <CheckIcon style={{color: '#07A23B'}}/>}
                </Button>
            </Grid>
        </Grid>
    );
};

export default React.memo(SubContainerItem);