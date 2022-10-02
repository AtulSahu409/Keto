import React from 'react'
import axios from "axios";

export const RecData=(params)=> {
    return axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${params}&app_id=6be00313&app_key=4f1667d56ea0b23b894619eb3cb1faf3%09`
      );
  
}

