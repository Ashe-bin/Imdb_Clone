import React from "react";
import Card from "@/components/Card";
const SearchPage = async ({ params }) => {
  const searchTerm = params.term;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en_US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;

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
};

export default SearchPage;
