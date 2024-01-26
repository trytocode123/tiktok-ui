import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Logout from '~/pages/Logout';
import Feedback from '~/pages/Feedback';
import Live from '~/pages/Live';

const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.feedback, component: Feedback },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.logout, component: Logout },
    { path: config.routes.live, component: Live },
];

const privateRouters = [];

export { publicRouters, privateRouters };
