import React from 'react';
import Proptypes from 'prop-types';
import { Link } from '@reach/router';

// Styled component
import { StyledMovieThumb } from '../styles/StyledMovieThumb';


const MovieThumb = ({ image, movieId, clickable }) => (

    <StyledMovieThumb>
        {clickable ? (
            <Link to={`/${movieId}`}>
              <img className="clickable" src={image} alt="moviethumb" />
            </Link>          
        ) : (
            <img src={image} alt="moviethumb" />
        )}
    </StyledMovieThumb>
) 

MovieThumb.propTypes = {
    image: Proptypes.string,
    movieId: Proptypes.number,
    clickable: Proptypes.bool,
} 
export default MovieThumb;