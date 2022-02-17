import React from 'react';
import {styled} from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import {SvgIconProps} from "@mui/material/SvgIcon/SvgIcon";


const MenuIconStyled = styled(MenuIcon)(() => ({
    cursor: 'pointer',
    color: '#000000',
    '&:hover': {
        opacity: 0.7
    }
}))
const MenuIconStyle = (props: SvgIconProps) => {
    // @ts-ignore
    return <MenuIconStyled {...props} />
};

export default React.memo(MenuIconStyle);