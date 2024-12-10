// import { createBrowserRouter } from "react-router-dom";
// import VirtualDOM from "../components/VirtualDOM";
// import MyImageComp from "../components/MyImageComp";
// import EventComp from "../components/EventComp";
// import MyHocComp from "../components/MyHocComp";
// import UserComp from "../components/UserComp";
// import PageNotFoundComp from "../layout/PageNotFoundComp";
// import ReactHooksComp from "../Hooks/ReactHooksComp";
// import UseStateHooksComp from "../Hooks/UseStateHooksComp";
// import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
// import MainDashboardComp from "../layout/MainDashboardComp";
// import LoginComp from "../layout/LoginComp";

// const routing =createBrowserRouter([
   
// {path:"",element:<LoginComp></LoginComp>}, //default routing
// {path:"*", element:<PageNotFoundComp></PageNotFoundComp>},
// {path:"mainDashboard", element:<MainDashboardComp></MainDashboardComp>, children:[
//     {path:"VirtualDom",element:<VirtualDOM></VirtualDOM>}, //naming routing
   
//     {path:"MyImages", element:<MyImageComp></MyImageComp>},
//     {path:"User", element:<UserComp></UserComp>}, //wild-card routing
   
//     {path:"hooks", element:<ReactHooksComp></ReactHooksComp>, children :[
//         {path:"useState", element:<UseStateHooksComp></UseStateHooksComp>},
//         {path:"useEffect", element:<UseEffectHooksComp></UseEffectHooksComp>}
//     ]}, // child routing
// ]},


// ])

// export default routing;

import {createBrowserRouter} from "react-router-dom";
import VirtualDOM from "../components/VirtualDOM";
// import PageNotFound from "../Layout/PageNotFound";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHooksComp from "../Hooks/UseStateHooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import MainDashboardComp from "../layout/MainDashboardComp";
import MyFacColoComp from "../components/MyFacColoComp";
import FormValComp from "../components/FormValComp";
import FormValidationTaskComp from "../components/FormValidationTaskComp";
import ProctDashCompdu from "../CRUD/ProctDashComp";
import ProtectedRoutingComp from "../MainRouting/ProtectedRouting"
import Mycorousel from "../components/Mycorousel";

// import LoginComp from "../Layout/LoginComp";
const routing = createBrowserRouter([
    // { path: "", element: <LoginComp /> },
    // 
    // {
      // path: "MainDashboard",element: <MainDashboardComp />,
      {path:"maindashboard",element:<ProtectedRoutingComp Component = {MainDashboardComp} />,children:[
     
        { path: "usestate", element: <UseStateHooksComp /> },
        { path: "formValidation", element: <FormValComp></FormValComp>},
        { path: "useeffect", element: <UseEffectHooksComp /> },
        { path: "hooks", element: <ReactHooksComp /> },
        {path:"favcolor",element:<MyFacColoComp newColor="Green"></MyFacColoComp>},
        { path: "virtualdom", element: <VirtualDOM /> },
        { path: "FormValidationTaskComp", element: <FormValidationTaskComp></FormValidationTaskComp> },
        { path: "ProductEditComp", element: <ProctDashCompdu></ProctDashCompdu> },
        { path: "Mycorosel", element: <Mycorousel></Mycorousel>}

      ]
    },
    // { path: "*", element: <PageNotFound /> }, // Catch-all for 404 pages
  ]);
  
  export default routing;