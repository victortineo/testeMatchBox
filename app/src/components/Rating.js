import React from 'react'
import './rating.scss'

const Rating = ({positive, negative, total}) => {
    return(
        <div className='rating'>
            <div className="rating__wrapper">
                <div className="rating__likes">
                    <p className="rating__likesHead">Gostam</p>
                    <p className="rating__likesTotal">{positive ? Math.round(positive * 100 / total) : 0}%</p>
                </div>
                <div className={`rating__likes`}>
                    <p className="rating__likesHead">Não gostam</p>
                    <p className="rating__likesTotal">{negative ? Math.round(negative * 100 / total) : 0}%</p>
                </div>
            </div>  
        </div>
    )
}

export default Rating