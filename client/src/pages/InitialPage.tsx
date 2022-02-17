import React, {useState} from 'react';
import {Grid, useMediaQuery} from "@mui/material";
import Header from "../header/Header";
import Drawer from "../drawer/Drawer";
import Comment from "../comment/Comment"
import DrawerMobile from "../drawer/components/drawerMobile/DrawerMobile";
import {Outlet} from "react-router-dom";


const InitialPage = () => {
    const [contentWidth, setContentWidth] = useState(640)
    const isCloseDrawer = useMediaQuery(`(max-width:${contentWidth !== 640 ? 1300 : 830}px)`, {noSsr: true})
    const [openDrawer, setOpenDrawer] = useState(!isCloseDrawer)
    const isCloseComment = useMediaQuery(`(max-width:${contentWidth !== 640 ? 1540 : 1180}px)`, {noSsr: true})
    const openDrawerCondition = openDrawer ? 10 : 12
    return (
        <Grid bgcolor={'#f2f2f2'}>
            <Grid position={'sticky'} top={0}>
                <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
            </Grid>
            <Grid display={'flex'}>
                {openDrawer &&
                    <Grid lg={2.5} md={2.5} item xs={5} xl={1.5}>
                        {isCloseDrawer ? <DrawerMobile open={openDrawer} setOpen={setOpenDrawer}/> : <Drawer/>}
                    </Grid>
                }
                <Grid lg={isCloseComment && openDrawerCondition} item md={isCloseComment && openDrawerCondition}
                      xs={12} display={'flex'} justifyContent={'center'} xl={openDrawer ? 7.9 : 10.3}>
                    <Grid maxWidth={contentWidth} width={'100%'} mt={2} borderRadius={4}>
                        <Outlet context={{setContentWidth}} />
                    </Grid>
                </Grid>
                {!isCloseComment &&
                    <Grid item lg={2} md={2} xl={2.2}>
                        <Comment/>
                    </Grid>
                }
            </Grid>
        </Grid>
    );
};

export default InitialPage;