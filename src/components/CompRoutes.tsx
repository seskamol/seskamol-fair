//import * as React from 'react';
import {
    Box,
    Tabs,
    Tab
} from '@mui/material';

import {
    Route,
    Routes,
    Link,
    matchPath,
    useLocation,
} from 'react-router-dom';

import PageHome from './PageHome';
import PageCollect from './PageCollect';
import PageSculpture from './PageSculpture';
//import PageMusic from './PageMusic';
//import PageVideo from './PageVideo';

//const pageNames = ["home", "collect", "music", "video", "sculpture", "td", "exhibit", "link", "about"];
const pagePaths = ["/", "/collect", "/sculpture", "/music"];

function useRouteMatch(patterns: readonly string[]) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
            return possibleMatch;
        }
    }
    return null;
}

function Menu() {

    const routeMatch = useRouteMatch(pagePaths);
    const currentTab = routeMatch?.pattern?.path;
    return (
        <Box sx={{ mb: '0.2vw', border: 1, borderColor: 'secondary.light' }} component={'div'} >
            <Tabs value={currentTab}>
                <Tab label="home" value="/" to="/" component={Link} />
                <Tab label="collect" value="/collect" to="/collect" component={Link} />
                <Tab label="sculpture" value="/sculpture" to="/sculpture" component={Link} />
                {/* <Tab label="music" value="/music" to="/music" component={Link} /> */}
            </Tabs>
        </Box>
    );
}

export default function MenuRouter() {
    return (
        <Box component={'div'} sx={{ width: '100%', p: '0.2vw' }}>
            <Menu />
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/collect" element={<PageCollect />} />
                <Route path="/sculpture" element={<PageSculpture />} />
                {/* <Route path="/music" element={<PageMusic />} /> */}
            </Routes>
        </Box>
    );
}