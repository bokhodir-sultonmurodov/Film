import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useMovie = () => {
  const getMovies = (params: any) =>
    useQuery({
      queryKey: ["movie", params],
      queryFn: () =>
        api
          .get("discover/movie", { params }) 
          .then((res) => res.data),
    });

  const getMovieById = (id: number) =>
    useQuery({
      queryKey: ["movie", id],
      queryFn: () =>
        api
          .get(`movie/${id}`) 
          .then((res) => res.data),
     
    });

  return { getMovies, getMovieById };
};
