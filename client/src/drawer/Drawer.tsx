import React from 'react';
import {Grid} from "@mui/material";
import {styled} from "@mui/system";
import DrawerContent from "./components/DrawerContent";


const DrawerContainerGrid = styled(Grid)(() => ({
    maxHeight: '93vh',
    overflowX: 'hidden',
    overflowY: 'hidden',
    '&:hover': {
        overflowY: 'scroll',
    },
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
    },
    position: 'sticky',
    top: 60
}))

const DrawerDesktop = (props: any) => {
    return (
        <DrawerContainerGrid>
            <DrawerContent />
        </DrawerContainerGrid>
    );
};

export default React.memo(DrawerDesktop);