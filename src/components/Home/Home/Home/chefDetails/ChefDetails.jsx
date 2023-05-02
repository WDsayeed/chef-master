import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "../recipe/Recipe";

const ChefDetails = () => {
  const details = useLoaderData();
  const recipes = details.recipes;
  const { bio, name, img_url, experience, num_recipes, likes} = details;
  // const {id} = useParams()
  // console.log(id)
  // const [details, setDetails] = useState([])
  // useEffect( ()=>{
  //         fetch(`http://localhost:5000/chef`)
  //         .then(res=> res.json())
  //         .then(data=> setDetails(data))
  // },[])

  // const filterData = details.find(dt=> dt.id == id)
  // console.log(filterData)
  return (
    <>
    <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto my-24">
      <figure>
        <img 
        className="w-80 object-cover"
          src={img_url}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className=" h-0"><span className="font-medium">Experience:</span> {experience}</p>
        <p className=" h-0"><span className="font-medium">Likes:</span> {likes}</p>
        <p className=" h-0"><span className="font-medium">Number of recipes:</span> {num_recipes}</p>
        <p className="my-3 h-0"><span className="font-medium">Bio:</span> {bio}</p>
      </div>
    </div>
    {
      recipes.map(recipe=> <Recipe
   
      ></Recipe>)
    }
    </>
  );
};

export default ChefDetails;