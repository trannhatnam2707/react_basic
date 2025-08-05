import AboutPage from '../Pages/Aboutpage/AboutPage'
import HomePage from '../Pages/Homepage/Homepage'
import PageNotFound from '../Pages/PageNotFound/PageNotFound'


export const route = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/about',
        page: AboutPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: PageNotFound,
        isShowHeader: false
    },
] 