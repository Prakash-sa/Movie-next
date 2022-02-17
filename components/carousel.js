

function Carousel(props) {
    const {images}=props
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
                {images && images.map((image,index)=>(
                    <li key={image.id} data-target="#carouselExampleIndicators" data-slide-to={index} className={index===0?"active":""}></li>
                ))
                }
            </ol>
            <div className="carousel-inner" role="listbox">

                {images && images.map((image,index)=>(
                    <div key={image.id} className={index===0?"carousel-item active ":"carousel-item"}>
                        <img className="d-block img-fluid max-h-100" src={image.url} alt="First slide" />
                    </div>        
                ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
  )
}

export default Carousel