import React from 'react'
import loading from './loading.gif'

const Spinner = () =>  {
    
        return(
            <div className='text-center'>
                <img className="my-3" width="50px" height="50px" src={loading} alt="loading" />
            </div>
        )
    
}
export default Spinner