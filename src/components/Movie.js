import React, {useEffect,useState} from 'react'
import MovieItem from './MovieItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = (props)=>{
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)
  
  const  updateNews = async()=>{
    // props.setProgress(10);
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=4750523db0d1c5cd05c4585cdac5a1c5&language=en-US&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    // props.setProgress(30);
    let parsedData = await data.json()
    // props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.results);
    setLoading(false);
    setTotalResults(parsedData.total_results);
    // props.setProgress(100);
  
  }
  useEffect(() => {
    updateNews();
  }, [])
  

   const fetchMoreData = async ()=>{
     setPage(page + 1);
     let url = `https://api.themoviedb.org/3/movie/popular?api_key=4750523db0d1c5cd05c4585cdac5a1c5&language=en-US&page=${page + 1}`;
    //  this.setState({loading:true});
     let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData);
     setArticles(articles.concat(parsedData.results))
     setTotalResults(parsedData.total_results);
   }
    return (
    <>
      <h2 className='text-center' style={{margin:'70px 0px'}}>MovieMasala - Top Popular Hollywood Movie </h2>
      {loading && <Spinner/>}
       <InfiniteScroll
       dataLength={articles?.length}
       next={fetchMoreData}
       hasMore={articles?.length !== totalResults}
       loader={<Spinner/>}
       >
           <div className="container my-3">
      <div className="row">
        {articles.map((element)=>{
        return <div className="col-md-4" key={element.id}>
          <MovieItem title={element.original_title} description={element.overview} imageUrl={element.poster_path} date={element.release_date} />
        </div>
        })}
      </div>
      </div>
      </InfiniteScroll>
      
    </>
    )
   }

export default Movie