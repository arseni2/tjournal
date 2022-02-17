import React from 'react';
import {Avatar, Grid, Popover, Typography} from "@mui/material";
import {styled} from "@mui/system";
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CurrencyRubleOutlinedIcon from '@mui/icons-material/CurrencyRubleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


interface PropsI {
    open: boolean
    onClose: (value: null) => void
    anchorEl: Element | null
}

const PopoverNavItemContainerGrid = styled(Grid)(() => ({
    '&:hover': {
        background: '#f4f5f6'
    },
    height: 37,
    alignItems: 'center',
    cursor: 'pointer',
    padding: '0px 10px 0px 10px',
    boxSizing: 'border-box',
    borderBottom: '1px solid #ddd',
}))

const UserInfoPopover = (props: PropsI) => {
    return (
        <Popover
            open={props.open}
            anchorEl={props.anchorEl}
            onClose={() => {
                props.onClose(null)
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            PaperProps={{
                style: {
                    width: 200,
                    height: 248,
                    marginTop: 15,
                    padding: '6px 0px 0px 0px',
                    boxShadow: '0 0 0 1px rgb(0 0 0 / 7%), 0 4px 8px 0 rgb(0 0 0 / 7%)',
                }
            }}
        >
            <Grid>
                <Typography pl={1.25} fontSize={11} color={'#595959'}>
                    Профиль
                </Typography>

                <Grid mt={0.4}>
                    {/*mb вынести в отдельную компоненту*/}
                    <PopoverNavItemContainerGrid display={'flex'}>
                        <Avatar
                            src='https://leonardo.osnova.io/b1f22755-7356-50c9-8445-41e88dd8bb24/-/scale_crop/108x108/-/format/webp'
                            variant={'rounded'} sx={{width: 20, height: 20}}/>
                        <Typography letterSpacing={-0.2} pl={1} fontWeight={'bold'} fontSize={14}>
                            Арсений долгий Arc
                        </Typography>
                    </PopoverNavItemContainerGrid>

                    <PopoverNavItemContainerGrid display={'flex'} style={{color: 'rgb(129, 129, 129)'}}>
                        <FeedOutlinedIcon fontSize={'small'}/>
                        <Typography pl={1} fontSize={14}>
                            Черновики
                        </Typography>
                    </PopoverNavItemContainerGrid>

                    <PopoverNavItemContainerGrid style={{color: 'rgb(129, 129, 129)'}} display={'flex'}>
                        <CurrencyRubleOutlinedIcon fontSize={'small'}/>
                        <Typography pl={1} fontSize={14}>
                            Донаты
                        </Typography>
                    </PopoverNavItemContainerGrid>

                    <PopoverNavItemContainerGrid style={{color: 'rgb(129, 129, 129)'}} display={'flex'}>
                        <BookmarkBorderOutlinedIcon fontSize={'small'}/>
                        <Typography pl={1} fontSize={14}>
                            Закладки
                        </Typography>
                    </PopoverNavItemContainerGrid>

                    <PopoverNavItemContainerGrid style={{color: 'rgb(129, 129, 129)'}} display={'flex'}>
                        <SettingsOutlinedIcon fontSize={'small'}/>
                        <Typography pl={1} fontSize={14}>
                            Настройки
                        </Typography>
                    </PopoverNavItemContainerGrid>

                    <PopoverNavItemContainerGrid display={'flex'} style={{border: 'none', color: 'rgb(233, 42, 64)'}}>
                        <LogoutOutlinedIcon fontSize={'small'}/>
                        <Typography pl={1} fontSize={14}>
                            Выход
                        </Typography>
                    </PopoverNavItemContainerGrid>
                </Grid>
            </Grid>
        </Popover>
    );
};

export default React.memo(UserInfoPopover);