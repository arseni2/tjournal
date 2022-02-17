import React from 'react';
import PopularPage from "./pages/Popular/PopularPage";
import {Route, Routes} from "react-router-dom";
import ProfilePage from "./pages/Profile/Profile";
import BookmarkPage from "./pages/Bookmark/Bookmark";
import RatingPage from "./pages/Rating/RatingPage";
import PostDetailPage from "./pages/PostDetail/PostDetailPage";
import InitialPage from "./pages/InitialPage";
import Subscribers from "./pages/Subscribers/Subscribers";
import SubSiteDetailPage from "./pages/SubSiteDetail/SubSiteDetailPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import SignInPage from "./pages/SignIn/SignInPage";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<InitialPage/>}>
                    <Route path={'/'} element={<PopularPage/>}/>
                    <Route path={'u/:userId'} element={<ProfilePage/>}/>
                    <Route path={'/bookmark'} element={<BookmarkPage/>}/>
                    <Route path={'/rating'} element={<RatingPage/>}/>
                    <Route path={'/post/:post_id'} element={<PostDetailPage/>}/>
                    <Route path={'/subscribers'} element={<Subscribers/>}/>
                    <Route path={'/subsite/:subSiteId'} element={<SubSiteDetailPage/>}/>
                    <Route path={'*'} element={<p>404</p>}/>
                </Route>
                <Route path={'/auth/signup'} element={<SignUpPage/>}/>
                <Route path={'/auth/signin'} element={<SignInPage/>}/>
            </Routes>
        </>
    );
}

export default App;
