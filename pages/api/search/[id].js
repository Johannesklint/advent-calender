import  axios from "axios"

export default async function getSearchTerm(req, res) {
  const {
    query: { id },
  } = req
  const [term, page] = id.split("&")
  let data = await axios
    .get(
      `https://icanhazdadjoke.com/search?term=${term}&page=${page}&limit=10`,
      {
        headers: { Accept: "application/json" },
      }
    )
    .then((res) => res.data)
  res.json(data)
}
