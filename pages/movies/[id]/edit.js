import React, { useEffect, useState } from "react"
import MovieCreateForm from "../../../components/movieCreateForm"
import { getMoviebyId } from "../../../actions"

const EditMovie=(props)=>{

    // const [movie,setMovie]=useState({
    //     name:'',
    //     description:'',
    //     rating:'',
    //     cover:'',
    //     image:'',
    //     longDesc:'',
    //     genre:''
    // })

    // useEffect(()=>{
    //     const id=props.id
    //     getMoviebyId(id).then((movie)=>{
    //         setMovie(movie)
    //     })
    // },[])

    return (
        <div>
            <h1>Edit the movie</h1>
            <MovieCreateForm initialData={props.movie}/>
        </div>
    )
}

EditMovie.getInitialProps=async({query})=>{
    const movie=await getMoviebyId(query.id)
    return {movie}
}

export default EditMovie