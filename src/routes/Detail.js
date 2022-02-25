import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Movie from "../components/Movie";
import styles from "./Detail.module.css";

function Detail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  //console.log(movies);
  return (
    <div className={styles.container}>
      {loading ? <div className={styles.loader}>
          <span>Loading...</span>
        </div>  : (
    
        <div className={styles.movies}>
           <img className={styles.back} 
          src={details.background_image_original} />
          
         <Movie 
           key={details.id}
           id={details.id}
           coverImg={details.medium_cover_image}
           title={details.title}
           summary={details.description_full}
           year={details.year}
           lan={details.language}
           genres={details.genres} 
           />
        </div>
      )}
    </div>
  );
}

export default Detail;