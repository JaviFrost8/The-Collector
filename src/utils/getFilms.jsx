export async function getFilms(film) {

  try {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${film}&include_adult=false&language=es-ES&page=1`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjE0YzFhZDk1NzM1N2E5NzU5NmYzNDRmNzg0OTJhMCIsIm5iZiI6MTczMzMwNTQ4Mi44MDMsInN1YiI6IjY3NTAyNDhhYTkzYmRlYThjMjUwOTgzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.41oQjmoK08Oisql8JHoHwoyjV9g1r0Vfx4raVSWgnrc',
        'accept': 'application/json'
      }
    })

    const data = await res.json()

    return data.results

  } catch (err) {
    console.log(err)
  }
}