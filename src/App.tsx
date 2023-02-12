import Home from "app/Home/Home";
import { axiosInterceptor } from "interceptors/axios.interceptor";
import React from "react";

function App() {
  axiosInterceptor();
  return (
    <div>
       <Home />
    </div>
  );
}

export default App;
