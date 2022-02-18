import React from 'react'
import {useRouter} from 'next/router'
import { getMoviebyId , deleteMovies} from '../../../actions'
import Link from 'next/link'

function Movie(props) {
    
    const router=useRouter()
    const {id}=router.query


    const handleDeleteMovie=(id)=>{
      deleteMovies(id).then(()=>{
        router.push("/")
      })
    }

  return (
    <div className='py-20 m-10'>
      <img src={props.movie.image}></img>
        <h1 className='font-bold'>Movie have id: {props.movie.name}</h1>
        <p className='my-3'>{props.movie.description}</p>
        <button className='rounded-full mr-3 px-3 bg-red-100'>Learn More</button>
        <button onClick={()=>handleDeleteMovie(props.movie.id)} className='rounded-full px-3 mr-3 bg-red-500'>Delete</button>
        <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
          <button onClick={()=>router.push(`/movies/${id}/edit`)} className='rounded-full px-3 bg-orange-500'>Edit</button>        
        </Link>
    </div>
  )
}

Movie.getInitialProps=async(context)=>{
    const {id}=context.query
    const movie=await getMoviebyId(id)
    return {movie}
}

export default Movie