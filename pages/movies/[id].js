import React from 'react'
import {useRouter} from 'next/router'
import { getMoviebyId } from '../../actions'

function Movie(props) {
    
    const router=useRouter()
    const {id}=router.query
  return (
    <div className='py-20 m-10 bg-gray-50'>
        <h1>Movie have id: {props.movie.id}</h1>
        <p>{props.movie.description}</p>
        <button>Learn More</button>
    </div>
  )
}

Movie.getInitialProps=async(context)=>{
    const {id}=context.query
    const movie=await getMoviebyId(id)
    return {movie}
}

export default Movie