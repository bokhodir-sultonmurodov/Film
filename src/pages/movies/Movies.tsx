import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movie-view/MovieView";
import React, { useEffect } from "react";
import {Pagination} from "antd"
import { useGenre } from "@/api/hooks/useGenre";
import Genre from "@/components/genre/Genre";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  // const [page,setPage] = useState(1)
  const { getMovies } = useMovie();
  const { getGenres } = useGenre()
  const {data: genreData} = getGenres()
  const [params,setParams]=useSearchParams()
    const page: string | number = params.get("page") || 1;
  
  const { data,isLoading } = getMovies({ page,without_genres: "18,36,27,10749", limit:20,skip:20 * (Number(page) - 1) });
  const handleChangePage = (page:number)=>{
    // setPage(page);
    params.set("page", page.toString())
    setParams(params)
  }
  useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, [page]);
  console.log(genreData);
  return (
    <div>
      <Genre data={genreData?.genres}/>
      <MovieView loading={isLoading} data={data?.results} count={20}/>
      <div className="container mx-auto flex justify-center">
        <Pagination current={Number(page)} onChange={handleChangePage} total={500} />
      </div>
    </div>
  );
};

export default React.memo(Movies);