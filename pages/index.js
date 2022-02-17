import Head from 'next/head'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import SideMenu from '../components/sideMenu'
import Carousel from '../components/carousel'
import MovieList from '../components/movieList'
import Footer from '../components/footer'
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
  return (
    <div className={styles.container}>

      <div className="container py-10">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu categories={categories}/>
          </div>
          <div className="col-lg-9">
            <Carousel images={images}/>
            <div className="row">
              {props.errorMessage && 
                <div className='bg-red-500'>
                  {prpos.errorMessage}
                </div>
              }
              <MovieList movies={props.movies}/>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>

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