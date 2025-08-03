import Home from "../pages/Homepage/Home"
import Detail from "../pages/DetailPage/Detail"
import PageNotFound from "../pages/PageNotFound/PageNotFound"

export const route = [
    {
        path: '/',
        page: Home,
        isShowHeader: true
    },
    {
        path: '/detail',
        page: Detail,
        isShowHeader: true
    },
    {
        path: '*',
        page: PageNotFound,
        isShowHeader: false
    },
]

