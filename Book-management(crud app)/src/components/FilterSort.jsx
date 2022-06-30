import React from 'react'
import {useEffect, useState}from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
// import {getBooks} from '../redux/AppReducer/action'



const FilterSort = () => {

  const dispatch=useDispatch()
  const [searchparams,setsearchparams]=useSearchParams()
  const urlcategory=searchparams.getAll("category")
  const urlsort=searchparams.get("sortby")
  const [category, setcategory] = useState(urlcategory || [])
  const [sortby, setsortby] = useState(urlsort || "")


  const handlecheckbox=(e)=>{
    const option =e.target.value
    //if the option is already present then remove it, else add it
    
    let newcategory=[...category]
    if(category.includes(option)){
      //remove it
      newcategory.splice(newcategory.indexOf(option),1)
    }
    else{
      newcategory.push(option)
    }
    setcategory(newcategory)
  }

  const handlesort=(e)=>{
    setsortby(e.target.value)
  }

  useEffect(()=>{
    if(category|| sortby){
      let params = {}
      category && (params.category=category)
      sortby && (params.sortby=sortby)
      setsearchparams(params)
      
    }
  },[category,setsearchparams,dispatch,sortby])

  // useEffect(()=>{
  //   if(category){
  //     setsearchparams({category})
      
  //   }
  // },[category,setsearchparams,dispatch])


  // useEffect(()=>{
  //   if(sortby){
  //     const params={
  //       category:searchparams.getAll("category"),
  //       sortby,
  //     }
      
  //     const getbooksparams={
  //       params:{
  //         category:searchparams.getAll("category"),
  //         _sort:"release_year",
  //         _order:sortby
  //       }
  //     }
  //     setsearchparams(params)
     
  //   }
  // },[setsearchparams,sortby,searchparams,dispatch])
  return (
    <div>
    <h3>Filter</h3>
    <div>
      <div>
        <input type="checkbox" onChange={handlecheckbox} value="Novel" defaultChecked={category.includes("Novel")}/>
        <label >Novel</label>
      </div>
      <div>
        <input type="checkbox" onChange={handlecheckbox} value="Science_Fiction" defaultChecked={category.includes("Science_Fiction")}/>
        <label >Science_Fiction</label>
      </div>
      <div>
      <input type="checkbox" onChange={handlecheckbox} value="Motivational" defaultChecked={category.includes("Motivational")}/>
          <label >Motivational</label>
        </div>
        <div>
          <input type="checkbox" onChange={handlecheckbox} value="Thriller" defaultChecked={category.includes("Thriller")}/>
          <label >Thriller</label>
        </div>
      </div>
      <h3>Sort</h3>
      <div onChange={handlesort}>
        <input type="radio" value="asc" name="sortby" defaultChecked={sortby==="asc"}/>Ascending
        <input type="radio" value="desc" name="sortby" defaultChecked={sortby==="desc"}/>Descending
      </div>
      
      </div>
  )
}

export default FilterSort