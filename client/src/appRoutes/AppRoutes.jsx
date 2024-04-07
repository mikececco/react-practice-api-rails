import React from "react";
import { Route, Routes } from "react-router-dom";
// import EmailsList from "../emailslist/EmailsList";
// import EmailsListDetails from "../emailslist/EmailsListDetails";
// import Homepage from "../homepage/Homepage";
// import Demo from "../demo/Demo";
// import Reports from "../demo/Reports";
// import Signup from "../signup/Signup";
// import SearchReddit from "../searchReddit/SearchReddit";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
    </Routes>
  )
}

export default AppRoutes;
