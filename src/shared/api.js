import axios from "axios";

const key = "9c40587b7d16ffbdc73a57b7c7629b49";

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3`
})

export const getTrendMuvies = async () => {
    const { data } = await instance.get(`/trending/movie/day?api_key=${key}`);
    // console.log(data)
    return data.results;
}
    
export const getMuviesId = async (id) => {
    const { data } = await instance.get(`/movie/${id}?api_key=${key}&language=en-US`);
    return data;
}

export async function getCast(id) {
    const { data } = await instance.get(`/movie/${id}/credits?api_key=${key}&language=en-US`)
    return data.cast;
}

export async function getReviews(id) {
    const {data} = await instance.get(`/movie/${id}/reviews?api_key=${key}&language=en-US`)
    //  const response = await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=${LANGUAGE}&page=1`)
    return data.results;
}

export async function getMoviesByQuery(query) {
    const {data} = await instance.get(`search/movie?api_key=${key}&language=en-US&page=1&query=${query}`)
    //  const response = await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=${LANGUAGE}&page=1`)
    return data.results;
}


// export async function fetchMoviesByQuery(query) {
//      const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&page=1&query=${query}`)
//     if (response.ok) {
//         const data = await response.json()
//         return data.results
//     }
//     return new Error()
// }