import PropTypes from "prop-types";
import {Link}from "react-router-dom"; 
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year, lan, backImg, summary, genres}) {
  return (
    <div className={styles.movie}>
  
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => ( //장르가 배열로 되어있기 때문에 이렇게 map써야함
          <li key={g}>{g}</li> //키값으로 g를 준 이유는 고유한 id가 없기때문에 g가 고유하다면 가능 
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number,
  lan: PropTypes.string,
  backImg: PropTypes.string
};

export default Movie;