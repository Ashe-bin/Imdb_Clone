"use client";
import React, { useState, useEffect } from "react";
import loading from "./loading";
import Card from "@/components/Card";

const API_KEY = process.env.API_KEY;

function Home({ searchParams }) {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const genre = searchParams.genre || "fetchTrending";
    const URL = `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}`;

    const res = fetch(URL, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2Y2YWNmNmVkODdlNGM4MWNhZGU3ZDAxOTNmZjZiMiIsIm5iZiI6MTcyOTE2MTk5OS41MjE4NDEsInN1YiI6IjY3MTBlOWRiZGI3OWM5Y2VhZTBlZWNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.63g_xeWkTI_OXqvAJO77NkRh6FSbW__MuFFAGYHO-XA",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(
              `Failed to fetch data: ${res.statusText}, Response: ${text}`
            );
          });
        }
        return res.json();
      })
      .then((data) => {
        setResults(data.results || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams.genre]); // dependencies

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        {" "}
        <loading />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <div>
      {results.length > 0 ? (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
          {results.map((result) => (
            <Card key={result.id} result={result} />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default Home;
