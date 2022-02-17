import React from 'react';
import {Avatar, Grid, Typography} from "@mui/material";
import {styled} from "@mui/system";


const ContainerLinksGrid = styled(Grid)(() => ({
    display: 'flex',
    alignItems: 'center',
    width: '95%',
    height: 44,
    cursor: 'pointer',
    marginLeft: 10,
    marginTop: 4
}))

const Container = styled(Grid)(() => ({
    '&:hover': {
        background: '#fff'
    },
    display: 'flex',
    padding: 7,
    borderRadius: 8,
    textAlign: 'left',
    width: '100%'
}))

interface PropsI {
    icon?: any
    text: string
    active?: boolean
    img_source?: string
}

const DrawerLinks = (props: PropsI) => {
    return (
        <ContainerLinksGrid>
            <Container bgcolor={props.active ? '#fff' : 'inherit'}>
                <Grid style={{color: props.active ? '#e5a040' : '#595959'}} display={'flex'} alignItems={'center'}>
                    {
                        props.icon
                            ? props.icon
                            : <Grid>
                                <Avatar sx={{width: 24, height: 24}} src={props.img_source} variant={'rounded'}/>
                            </Grid>
                    }
                </Grid>
                <Grid>
                    <Typography pl={1.5}>
                        {props.text}
                    </Typography>
                </Grid>
            </Container>
        </ContainerLinksGrid>
    );
};

export default React.memo(DrawerLinks);