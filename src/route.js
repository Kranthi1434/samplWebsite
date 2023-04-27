import { useRoutes } from "react-router-dom"
import HomePage from "./HomePage"
import Form from "./Form"
import Sample from "./Sample"



export function Route () {
     return useRoutes([
        {
            path:'/home',
            element:<HomePage></HomePage>
        },
        {
            path:'/form',
            element:<Form/>
        },
        {
            path:'sample',
            element:<Sample/>
        },
     

     ])
}