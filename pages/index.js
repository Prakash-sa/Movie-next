import Head from 'next/head'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideMenu from '../components/sideMenu'
import Carousel from '../components/carousel'
import MovieList from '../components/movieList'
import { getCategories, getMovies } from '../actions'


export default function Home(props) {

  // const [movies,setMovies]=useState([])
  // const [errorMessage,setErrorMessage]=useState()

  // useEffect(()=>{
  //   // getMovies().then((movies)=>{
  //   //   setMovies(movies)
  //   // })
  //   const fetchData=async()=>{
  //     try {
  //       const resMovies=await getMovies()
  //       setMovies(resMovies) 
  //     } catch (error) {
  //       setErrorMessage(error)
  //     }
  //   }
  //   fetchData() 
  // })
  
  
  const {images,categories}=props
  const [filter,setFilter]=useState('all')


  const changeCategory=(category)=>{
    setFilter(category)
  }
  
  const filterMovies=movies=>{
    if(filter==='all')return movies
    return movies.filter((m)=>{
      return m.genre && m.genre.includes(filter)
    })
  }


  return (
    <div className={styles.container}>

      <div className="container py-10">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu
            activeCategory={filter} 
            changeCategory={changeCategory} 
            categories={categories}/>
          </div>
          <div className="col-lg-9">
            <Carousel images={images}/>
            <h1 className='font-bold m-2'>Displaying {filter} movies</h1>
            <div className="row">
              {props.errorMessage && 
                <div className='bg-red-500'>
                  {prpos.errorMessage}
                </div>
              }
              <MovieList movies={filterMovies(props.movies)||[]}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

Home.getInitialProps=async()=>{
  const movies=await getMovies()
  const categories=await getCategories()
  const images=movies.map((movie)=>{
    return{
      id:`image-${movie.id}`,
      url:movie.cover
    }
  })
  return {movies,images,categories}
}