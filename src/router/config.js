import Account from '../pages/account'
import Choose from '../pages/choose'
import Detail from '../pages/detail'
import Fill from '../pages/fill'
import Login from '../pages/login'
import Register from '../pages/register'
import Query from '../pages/query'
import Bill from '../pages/bill'
let routerConfig={
    routes:[
        {
            path:"/",
            component:Login,
            exact:true
        },
        {
            path:"/choose",
            component:Choose
        },
        {
            path:"/account",
            component:Account,
            children:[
                {
                   path:"/account/query",
                   component:Query
                },
                {
                    path:"/account/bill",
                   component:Bill
                }
            ]
        },
        {
            path:"/detail",
            component:Detail
        },
        {
            path:"/register",
            component:Register
        },
        {
            path:"/fill",
            component:Fill
        },
    ]
}
export default routerConfig