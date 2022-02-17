import {Drawer, Grid, Typography} from '@mui/material';
import React from 'react';
import {styled} from "@mui/system";
import DrawerContent from "../DrawerContent";
import MenuIconStyle from "../../../components/MenuIcon";


interface PropsI {
    open: boolean
    setOpen: (open: boolean) => void
}

const DrawerStyled = styled(Drawer)(() => ({
    '& .MuiDrawer-paperAnchorLeft': {
        width: 260,
    },
    display: 'flex',
    flexDirection: 'column',
    '& .MuiDrawer-paper': {
        '&::-webkit-scrollbar': {
            width: '0.28em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.2)',
            borderRadius: 10
        }
    }
}))
const HeaderGrid = styled(Grid)(() => ({
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 5,
    position: 'sticky',
    top: 0,
    backgroundColor: '#f2f2f2',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 20,
}))


const DrawerMobile = (props: PropsI) => {
    const closeDrawer = () => props.setOpen(false)
    return (
        <DrawerStyled open={props.open} onClose={closeDrawer} PaperProps={{
            sx: {
                backgroundColor: '#f2f2f2'
            }
        }}>
            <HeaderGrid>
                <MenuIconStyle fontSize={'medium'} onClick={closeDrawer} />
                <Typography fontWeight={600} fontSize={18}>
                    TJournal
                </Typography>
            </HeaderGrid>
            <DrawerContent/>
        </DrawerStyled>
    );
};

export default React.memo(DrawerMobile);