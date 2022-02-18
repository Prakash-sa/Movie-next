import React, { useEffect, useState } from "react"
import Router from "next/router"
import MovieCreateForm from "../../../components/movieCreateForm"
import { getMoviebyId ,updateMovie} from "../../../actions"

const EditMovie=(props)=>{

    const handleUpdateMovie=(movie)=>{
        updateMovie(movie).then((updatedMovie)=>{
            Router.push('/movies/[id]',`/movies/${movie.id}`)
        })
    }

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
            <MovieCreateForm
            submitButton='Update' 
            initialData={props.movie}
            handleFormSubmit={handleUpdateMovie}
            />
        </div>
    )
}

EditMovie.getInitialProps=async({query})=>{
    const movie=await getMoviebyId(query.id)
    return {movie}
}

export default EditMovie