import { Route,Routes } from "react-router-dom";
import Features from "../Pages/Features";
import Premium from "../Pages/Premium";
import Articles from "../Pages/Articles";
import Recipes from "../Pages/Recipes"; 
import Login from "../Pages/Log-In";
import Logo from "../Pages/Logo";
import Cookbook from "../Pages/Cookbook"
import Signin from "../Pages/Signin";
import SignUp from "../Pages/SignUp";
const AllRouter=()=>{
    return(
        <Routes>
            <Route path="/" element={<Logo/>}></Route>
            <Route path="/Features" element={<Features/>}>Features</Route>
            <Route path="/Premium" element={<Premium/>}>Premium</Route>
            <Route path="/Recipes" element={<Recipes/>}>Recipes</Route>
            <Route path="/Articles" element={<Articles/>}>Articles</Route>
            <Route path="/Cookbook" element={<Cookbook/>}>Cookbook</Route>
            <Route path="/Pages/Signin" element={<Signin/>}>Signin</Route>
            <Route path="/SignUp" element={<SignUp/>}>SignUp</Route>

            <Route path="/Login" element={<Login/>}>Login</Route>

        </Routes>
    )
}
export default AllRouter