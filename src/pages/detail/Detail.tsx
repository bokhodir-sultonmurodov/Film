import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "@/api/hooks/useMovie";
import { IMAGE_URL } from "@/const";

const Detail = () => {
  const { id } = useParams();
  const { getMovieById } = useMovie();

  const { data: product, isLoading, error } = getMovieById(Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoading)
    return <div className="text-center py-10 text-xl">Loading...</div>;

  if (error)
    return (
      <div className="text-center py-10 text-red-500 text-lg">
        Try later
      </div>
    );


  const {
    original_title,
    overview,
    poster_path,
    genres,
    production_companies,
    spoken_languages,
    release_date,
    runtime,
    vote_average,
  } = product;

  return (
    <div className="container max-w-6xl mx-auto p-6 bg-white dark:bg-[#121212]">
      <div className="flex flex-col md:flex-row gap-8">
        <div className=" w-full md:w-1/3 rounded-lg overflow-hidden  border border-gray-200 dark:border-gray-700">
          <img
            src={IMAGE_URL + poster_path}
            alt={original_title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex-1 text-gray-900 dark:text-white flex flex-col">
          <h1 className="text-4xl font-extrabold mb-3">{original_title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span>Release Date: {release_date}</span>
            <span>Runtime: {runtime} min</span>
            <span>Rating: {vote_average.toFixed(1)} ⭐</span>
          </div>

          <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            {overview}
          </p>


          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-lg">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre: any) => (
                <span
                  key={genre.id}
                  className="bg-gradient-to-r from-red-800 to-red-900 text-white px-3 py-1 rounded-full text-sm font-medium shadow"
                >
                  {genre.name}
                  {/* <strong>{genre.id}</strong> */}
                </span>
              ))}
            </div>
          </div>



          <div>
            <h3 className="font-semibold mb-2 text-lg">Production Companies</h3>
            <div className="flex flex-wrap gap-6 items-center">
              {production_companies.map((company: any) =>
                company.logo_path ?
                  <img
                    key={company.id}
                   src={IMAGE_URL + company.logo_path}
                    alt={company.name}
                    className="h-10 object-contain "
                    loading="lazy"
                    title={company.name}
                  />

                  : <></>
              )}
            </div>
          </div>

         
            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-lg">Spoken Languages</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {spoken_languages.map((lang: any) => (
                  <li key={lang.id}>{lang.english_name}</li>
                ))}
              </ul>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default React.memo(Detail);
