import authRoute from "../modules/auth/auth.route";
import userRoute from "../modules/user/user.route";
import { Router } from 'express';


const serverRoutes = Router();


type TServerRoutes = {
    path: string;
    route: any
}
const allRoutes: TServerRoutes[] = [
    {
        path: "/user",
        route: userRoute
    },
    {
        path: "/auth",
        route: authRoute
    }
]


// dynamically create route
allRoutes.forEach((route) => serverRoutes.use(route.path, route.route));

export default serverRoutes;