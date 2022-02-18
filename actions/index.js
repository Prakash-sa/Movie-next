import axios from 'axios'

const BASE_URL="http://localhost:3000"

const MOVIE_DATA=[]


const CATEGORIES_DATA=[
  {id:'c-0','name':'all'},
  {id:'c-1','name':'drama'},
  {id:'c-2','name':'action'},
  {id:'c-3','name':'adventure'},
  {id:'c-4','name':'fantasy'}
]

export const deleteMovies=(id)=>{
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res=>res.data)
}

  export const getCategories=()=>{

    return new Promise((resovle,reject)=>{
      setTimeout(()=>{
        resovle(CATEGORIES_DATA)
      },50)
        // reject("Cannot fetch movie data")
    })
  }

export const getMovies=()=>{

  // return new Promise((resovle,reject)=>{
  //   setTimeout(()=>{
  //     resovle(MOVIE_DATA)
  //   },50)
  //     // reject("Cannot fetch movie data")
  // })

  return axios.get(`${BASE_URL}/api/v1/movies`).then((res)=>{
    return res.data
  })

}


export const updateMovie=(movie)=>{

  return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`,movie).then((res)=>{
    return res.data
  })
}

export const getMoviebyId=(id)=>{

  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then((res)=>{
    return res.data
  })


  // return new Promise((resolve,reject)=>{
  //   const movieIndex=MOVIE_DATA.findIndex((movie)=>{return movie.id===id})
  //   const movie=MOVIE_DATA[movieIndex]
  //   setTimeout(()=>{
  //     resolve(movie)
  //   },20)
  //  })
}

export const createMovie=(movie)=>{
  
  movie.id=Math.random().toString(36).substr(2,7)
  return axios.post(`${BASE_URL}/api/v1/movies`,movie).then(res=>res.data)


  // return new Promise((resolve,reject)=>{
  //   movie.id=Math.random().toString(36).substr(2,7)
  //   MOVIE_DATA.push(movie)
  //   setTimeout(()=>{
  //     resolve(MOVIE_DATA)
  //   },20)
  // })
}
