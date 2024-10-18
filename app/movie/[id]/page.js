import React from "react";
import Image from "next/image";

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  let movie;
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`;
  try {
    const res = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2Y2YWNmNmVkODdlNGM4MWNhZGU3ZDAxOTNmZjZiMiIsIm5iZiI6MTcyOTE2MTk5OS41MjE4NDEsInN1YiI6IjY3MTBlOWRiZGI3OWM5Y2VhZTBlZWNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.63g_xeWkTI_OXqvAJO77NkRh6FSbW__MuFFAGYHO-XA",
        "Content-Type": "application/json",
      },
    });
    movie = await res.json();
  } catch (error) {
    console.error("Error fetching the movie: ", error);
  }

  return (
    <div className="w-full ">
      {" "}
      <div className=" p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="mb-3">Date Release:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3"> {movie.vote_count}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
