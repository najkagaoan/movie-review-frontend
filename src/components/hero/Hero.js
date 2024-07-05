import './Hero.css'
import Carousel from "react-material-ui-carousel";
import {Paper} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import {Button} from "react-bootstrap";
const Hero = ({movies}) => {

    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`)
    }

    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies?.map((movie) => {
                        return(
                            <Paper>
                                <div className='movie-card-container' key={movie.imdbId}>
                                    <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={movie.poster} alt="" />
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className="movie-buttons-container">
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length-11)}`}>
                                                <div className="play-button-icon-container">
                                                    <span className="play-button-icon"><i className="bi bi-play-btn"></i></span>
                                                </div>
                                                </Link>

                                                <div className="movie-review-button-container">
                                                    <Button variant="info" onClick={() => reviews(movie.imdbId)}>Review</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero
