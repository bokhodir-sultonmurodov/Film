import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useMovie = () => {
  const getMovies = (params: any) =>
    useQuery({
      queryKey: ["movie", params],
      queryFn: () =>
        api
          .get("discover/movie", { params }) // token avtomatik qo‘shiladi
          .then((res) => res.data),
    });

  const getMovieById = (id: number) =>
    useQuery({
      queryKey: ["movie", id],
      queryFn: () =>
        api
          .get(`movie/${id}`) // token orqali authorized
          .then((res) => res.data),
      enabled: !!id,
    });

  return { getMovies, getMovieById };
};
