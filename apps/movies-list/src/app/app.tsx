import { Fragment, useCallback, useEffect, useState } from 'react';
import AddMovie from '../components/AddMovie';
import MoviesList from '../components/MoviesList';
import styles from './app.module.css';

export function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  async function addMovieHandler(movie: any) {
    console.log(movie);
    const response = await fetch(
      'https://react-movies-baac5-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    const data = await response.json;
    console.log(data);
  }

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setHasError(null);

    try {
      const response = await fetch(
        'https://react-movies-baac5-default-rtdb.firebaseio.com/movies.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      const loadedMovies: any[] = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          release_date: data[key].release_date,
          opening_crawl: data[key].opening_crawl,
        });
      }

      if (loadedMovies) {
        console.log(loadedMovies);
        setMovies(loadedMovies);
        setIsLoading(false);
      }
    } catch (error: any) {
      setHasError(error.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !hasError && <p>No Data</p>}
        {isLoading && <p>Loading....</p>}
        {!isLoading && hasError && <p>{hasError}</p>}
      </section>
    </Fragment>
  );
}

export default App;
