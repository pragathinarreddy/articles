import React from 'react'
import { data } from '../data'


function Articles() {
  return (
    <div>
        {
            data.map((each) => {
                console.log(each)
                
                return(
                    <>
                    <div className='flex'> 
                    <div className='card_class flex'>
                    <div className='card '>
                    <img className='image' src={each.urlToImage} alt="" />
                    <h2>{each.author}</h2>
                    <p>{each.title}</p>
                    <h2>{each.publishedAt}</h2>
                    <p>{each.description}</p>

                    </div>

                    </div>

                    </div>

                        
                    </>
                )
            })
        }
    </div>
  )
}

export default Articles