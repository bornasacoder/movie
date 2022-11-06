import React  from 'react'

const  NewsItem = (props) =>  {

    let {title, description, imageUrl, date} = props;
    return (
      <div>
        <div className="card">
           <div  style={{display:'flex',justifyContent:'flex-end',postion:'absolute',right:'0'}} >

        
          <span className="badge rounded-pill bg-danger">
            </span>
           </div>
         <img src={`https://image.tmdb.org/t/p/w400/${imageUrl}`} className="card-img-top" alt="..." />
           <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
           <p className="card-text">{description}...</p>
           <p className="card-text"><small> Release Date - {date} </small></p>
             {/* <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a> */}
           </div>
        </div>
      </div>
    )
  
}

export default NewsItem