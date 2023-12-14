import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../rootlayout/Layout";
import Home from "../pages/home/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import AccountPrivate from "./AccountPrivate";
import Account from "../pages/account/Account";
import PrivateRoute from "./PrivateRoute";
import Vendors from "../pages/Vendors";
import About from "../pages/About";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";
import Orders from "../pages/Orders";
import UserPrivate from "./UserPrivate";
import CompanyPrivate from "./CompanyPrivate";
import Error from "../pages/Error";
import CompanyDetails from "../pages/account/company/CompanyDetails";
import CreateFood from "../pages/account/company/CreateFood";
import CompanyFoods from "../pages/account/company/CompanyFoods";
import Dashboard from "../pages/account/Dashboard";
import UserDetails from "../pages/account/user/UserDetails";
import UserOrders from "../pages/account/user/UserOrders";
import Search from "../pages/Search";
import VendorPage from "../pages/VendorPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: (
          <AccountPrivate>
            <Signup />
          </AccountPrivate>
        ),
      },
      {
        path: "/signin",
        element: (
          <AccountPrivate>
            <Signin />
          </AccountPrivate>
        ),
      },
      {
        path: "account/:user",
        element: (
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "companydetails",
            element: (
              <CompanyPrivate>
                <CompanyDetails />
              </CompanyPrivate>
            ),
          },
          {
            path: "createfood",
            element: (
              <CompanyPrivate>
                <CreateFood />
              </CompanyPrivate>
            ),
          },
          {
            path: "companyfoods",
            element: (
              <CompanyPrivate>
                <CompanyFoods />
              </CompanyPrivate>
            ),
          },
          {
            path: "userdetails",
            element: (
              <UserPrivate>
                <UserDetails />
              </UserPrivate>
            ),
          },
          {
            path: "orders",
            element: (
              <UserPrivate>
                <UserOrders />
              </UserPrivate>
            ),
          },
        ],
      },
      {
        path: "/vendors",
        element: <Vendors />,
      },
      {
        path: "/orders",
        element: (
          <CompanyPrivate>
            <Orders />
          </CompanyPrivate>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/vendor/:slug",
        element: <VendorPage />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
];

const RoutesPath = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default RoutesPath;
