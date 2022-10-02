import { Link } from "react-router-dom";
import { useState } from "react";
import { Divider,Image } from '@chakra-ui/react'
import {IconButton,EditIcon,RepeatIcon,HamburgerIcon,AddIcon,ExternalLinkIcon } from "@chakra-ui/icons"
import { GiHamburgerMenu} from "react-icons/gi"
import React from "react";
import './Navbar.css';
import {Box} from "@chakra-ui/react"

const Navbar=()=>{
    const [show,setshow]=useState(false)
    
    return(
        <nav  className="navbar">
            <h3 className="logo"><Link to="/"><Image w="90%"  src="https://logotyp.us/files/carb-manager.svg"></Image></Link></h3>
            <ul className={show ? "nav nav-links" :  "nav-links"}>
                <Link to="/Features" className="Features"><li>Features</li>
                </Link>
                <hr />
                <Link to="/Premium" className="Premium"><li>Premium</li>
                </Link>
                <hr />
                <Link to="/Recipes" className="Recipes"><li>Recipes</li>
                </Link>
                <hr />
                <Link to="/Articles" className="Articles"><li>Articles</li>
                </Link>
                <hr />
                <Link to="/CookBook" className="Cookbook"><li>Cookbook</li>
                </Link>
                <hr />

                <Link to="/Login" className="Login"><li>Login</li>
                </Link>
                <hr />
                            
            </ul>
            <div className="hamburger-menu">
                <a href="#" onClick={()=>setshow(!show) }>
                    
                    <GiHamburgerMenu/>
                </a>
                
            </div>
        
        </nav>
        
    )

}
export default Navbar