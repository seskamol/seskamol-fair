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

import PageHome from './PageHome'
import PageCollect from './PageCollect';
//import PageMusic from './PageMusic'
//import PageVideo from './PageVideo'

//const pageNames = ["home", "collect", "music", "video", "sculpture", "td", "exhibit", "link", "about"];
const pagePaths = ["/", "/collect"];

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
        <Box sx={{ mb: 1, border: 1, borderColor: 'secondary.light' }} component={'div'} >
            <Tabs value={currentTab}>
                <Tab label="home" value="/" to="/" component={Link} />
                <Tab label="collect" value="/collect" to="/collect" component={Link} />
            </Tabs>
        </Box>

    );
}

export default function MenuRouter() {
    return (
        <Box component={'div'} sx={{ width: '100%', p: 1 }}>
            <Menu />
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/collect" element={<PageCollect />} />
            </Routes>
        </Box>
    );
}