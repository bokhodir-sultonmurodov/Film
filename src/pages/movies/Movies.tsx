import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movie-view/MovieView";
import React, { useEffect } from "react";
import { Pagination } from "antd";
import { useGenre } from "@/api/hooks/useGenre";
import Genre from "@/components/genre/Genre";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();
  const { data: genreData } = getGenres();
  const [params, setParams] = useSearchParams();
  const page: string | number = params.get("page") || 1;

  const { data, isLoading } = getMovies({
    page,
    without_genres: "18,36,27,10749",
    limit: 20,
    skip: 20 * (Number(page) - 1),
  });

  const handleChangePage = (page: number) => {
    params.set("page", page.toString());
    setParams(params);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // console.log(genreData);
  return (
    <div className="min-h-screen bg-white dark:bg-[#000] pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Genre data={genreData?.genres} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <MovieView loading={isLoading} data={data?.results} count={20} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Pagination
            current={Number(page)}
            onChange={handleChangePage}
            total={1000}
            responsive
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Movies);
