import React from 'react';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import {Grid, Typography} from "@mui/material";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import {styled} from "@mui/system";


const IconContainer = styled(Grid)(() => ({
    '&:hover': {
        color: '#3766a9'
    },
    color: '#595959',
    display: 'flex'
}))

interface PropsI {
    isShowRepost?: boolean
}

const PostIcons = (props: PropsI) => {
    return (
        <Grid display={'flex'} width={240} justifyContent={'space-around'}>
            <IconContainer>
                <ChatBubbleOutlineOutlinedIcon/>
                <Typography ml={0.5} fontSize={14} fontWeight={600}>
                    234
                </Typography>
            </IconContainer>

            <IconContainer>
                <CachedOutlinedIcon/>
                <Typography ml={0.5} fontSize={14} fontWeight={600} mt={0.05}>
                    234
                </Typography>
            </IconContainer>

            <IconContainer>
                <BookmarkBorderOutlinedIcon/>
            </IconContainer>

            {props.isShowRepost &&
                <IconContainer>
                    <ReplyOutlinedIcon/>
                </IconContainer>
            }
        </Grid>
    );
};

export default React.memo(PostIcons);