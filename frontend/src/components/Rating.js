import React from 'react'
import { PropTypes } from 'prop-types'


const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>  
        <span>
            <i style={{ color }}
                className={
                    //decide which star icon would be given
                    //from the rating number
                    value >= 1
                    ? 'fas fa-star'
                    : value >= 0.5
                    ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }
            ></i>
        </span>
        <span>
            <i style={{ color }}
                className={
                    //decide which star icon would be given
                    //from the rating number
                    value >= 2
                    ? 'fas fa-star'
                    : value >= 1.5
                    ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }
            ></i>
        </span>
        <span>
            <i style={{ color }}
                className={
                    //decide which star icon would be given
                    //from the rating number
                    value >= 3
                    ? 'fas fa-star'
                    : value >= 2.5
                    ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }
            ></i>
        </span>
        <span>
            <i style={{ color }}
                className={
                    //decide which star icon would be given
                    //from the rating number
                    value >= 4
                    ? 'fas fa-star'
                    : value >= 3.5
                    ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }
            ></i>
        </span>
        <span>
            <i style={{ color }}
                className={
                    //decide which star icon would be given
                    //from the rating number
                    value >= 5
                    ? 'fas fa-star'
                    : value >= 4.5
                    ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }
            ></i>
        </span>
        <span>{text && text /*if there is comment perform the comment*/}</span>
    </div>
  )
}

Rating.defaultProps = {
    color: '#f8e825',
}
//type check
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}


export default Rating