import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";


function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch (
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=7.5&sort_by=year`
    );
    const json = await response.json();
    console.log(json);
    setMovies(json.data.movies); //api로부터 얻은 data를 state로 변경 
    setLoading(false); //영화 api불러왔으니까 로딩을 이제 끝냈기 때문에 false로 바꿔야함
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className={styles.container}>
      {loading ? <div className={styles.loader}>
          <span>Loading...</span>
        </div> : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;