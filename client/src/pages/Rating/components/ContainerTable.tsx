import React from 'react';
import {Grid, Typography} from "@mui/material";

interface PropsI {
    header_title: string
    children: React.ReactNode
}

const ContainerTable = (props: PropsI) => {
    return (
        <Grid bgcolor={'#fff'} p={2} marginTop={1.875} pb={0}>
            <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography fontSize={15} fontWeight={600}>
                    {props.header_title}
                </Typography>
                <Typography pr={18} color={'#595959'} fontSize={13}>
                    Рейтинг
                </Typography>
            </Grid>

            <Grid mt={1}>
                {props.children}
            </Grid>
        </Grid>
    );
};

export default React.memo(ContainerTable);