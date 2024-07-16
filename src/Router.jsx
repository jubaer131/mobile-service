import {
    createBrowserRouter,
} from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout";
import Login from "./pages/Login";
import SendMoney from "./pages/SendMoney";
import Cashout from "./pages/Cashout";
import CashIn from "./pages/CashIn";
import BalanceInquery from "./pages/BalanceInquery";
import TransactionHistory from "./pages/TransactionHistory";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/sendMoney",
                element: <SendMoney></SendMoney>
            },
            {
                path: "/cashout",
                element: <Cashout></Cashout>,
            },
            {
                path: "/cashIn",
                element: <CashIn></CashIn>,
            },
            {
                path: "/balanceinquery",
                element: <BalanceInquery></BalanceInquery>,
            },
            {
                path: "/TransactionHistory",
                element: <TransactionHistory></TransactionHistory>,
            },

        ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/SignUp",
        element: <SignUp></SignUp>,
    },
]);

export default router