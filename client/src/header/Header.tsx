import {Avatar, Grid, useMediaQuery} from '@mui/material';
import React, {useState} from 'react';
import TJournalLogo from '../static/images/tjournal-icon.png'
import SearchInput from "./components/SearchInput";
import Button from "../components/Button";
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {styled} from "@mui/system";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import UserInfoPopover from "./components/popover/UserInfoPopover";
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import CreatePostDialog from "./components/CreatePostDialog";
import MenuIconStyle from "../components/MenuIcon";
import NavLinkStyled from "../components/NavLinkStyled";


const IconContainerGrid = styled(Grid)(() => ({
    '&:hover': {
        color: '#e5a040',
        cursor: 'pointer'
    }
}))
const AvatarContainerGrid = styled(Grid)(() => ({
    cursor: 'pointer',
    '&:hover': {
        opacity: 0.8
    }
}))
const KeyboardArrowDownStyled = styled(KeyboardArrowDownOutlinedIcon)(() => ({
    '&:hover': {
        opacity: 0.8
    },
    cursor: 'pointer'
}))

interface PropsI {
    setOpenDrawer: (value: boolean) => void
    openDrawer: boolean
}

const Header = (props: PropsI) => {
    const [anchorEl, setAnchorEl] = useState<Element | null>(null)
    const tabletMatches = useMediaQuery('(max-width:800px)', {noSsr: true})
    const closeDrawer = () => props.setOpenDrawer(!props.openDrawer)
    const [openDialogNewPost, setOpenDialogNewPost] = useState(false)
    const openDialog = () => setOpenDialogNewPost(true)
    const closePopover = () => setAnchorEl(null)
    const openPopover = (e: React.MouseEvent<SVGSVGElement>) => setAnchorEl(e.currentTarget)
    return (
        <Grid bgcolor={'#fff4e2'} height={60} display={'flex'} justifyContent={'space-between'}>
            <Grid display={'flex'} alignItems={'center'}>
                <Grid paddingLeft={2}>
                    <MenuIconStyle onClick={closeDrawer} fontSize={'medium'}/>
                </Grid>
                <Grid paddingLeft={2}>
                    <img width={50} height={50} src={TJournalLogo} alt='logo'/>
                </Grid>
                <Grid sx={{flexWrap: 'wrap', paddingLeft: 3, zIndex: 1600}}>
                    <SearchInput/>
                </Grid>
                <Grid pl={2} onClick={openDialog}>
                    <Button>
                        {tabletMatches ? <ModeEditOutlinedIcon/> : 'Новая запись'}
                    </Button>
                </Grid>
                <CreatePostDialog open={openDialogNewPost} setOpen={setOpenDialogNewPost}/>
            </Grid>

            <Grid display={'flex'} alignItems={'center'} pr={2}>
                <IconContainerGrid pr={2}>
                    <MessageOutlinedIcon fontSize={'medium'}/>
                </IconContainerGrid>
                <IconContainerGrid pr={2}>
                    <NotificationsNoneOutlinedIcon fontSize={'medium'}/>
                </IconContainerGrid>
                <AvatarContainerGrid>
                    <NavLinkStyled to={'/u/111'}>
                        <Avatar variant="rounded"
                                src={'https://leonardo.osnova.io/b1f22755-7356-50c9-8445-41e88dd8bb24/-/scale_crop/108x108/-/format/webp'}/>
                    </NavLinkStyled>
                </AvatarContainerGrid>
                <Grid pr={2} pl={2}>
                    <KeyboardArrowDownStyled onClick={openPopover}/>
                    <UserInfoPopover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={closePopover}/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default React.memo(Header);
