import React from "react"
import Link from "next/link"


function MovieList(props) {
    
    const {movies}=props

    const shorten=(text,maxLength)=>{
        if(text&&text.length>maxLength){
            return text.substr(0,maxLength)+"..."
        }
        return text
    }

    return (

    <React.Fragment>
        {movies.map((movie)=>
                <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                    <Link href={`/movies/${movie.id}`}>
                        <div className="card h-100">
                        <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                            <a href="#">{movie.name}</a>
                            </h4>
                            <p className="card-text">{shorten(movie.description,150)}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{movie.rating}</small>
                        </div>
                        </div>
                    </Link>
            </div>
            )
        }
    </React.Fragment>
  )
}

export default MovieList