import axios from "axios"

// sweet function to generate id's
function getId(date) {
  if (date === 1) {
    return "Qn3EIRZorrc"
  }
  if (date === 2) {
    return "qOmyPmO79h"
  }
  if (date === 3) {
    return "tkji39992Ed"
  }
  if (date === 4) {
    return "QnWnWSfiqc"
  }
  if (date === 5) {
    return "prWDIBdiGlb"
  }
  if (date === 6) {
    return "vkV0L6wcFlb"
  }
  if (date === 7) {
    return "HeiqcaMRKBd"
  }
  if (date === 8) {
    return "9Mus4wkqzd"
  }
  if (date === 9) {
    return "Xn3wX8hi3Ed"
  }
  if (date === 10) {
    return "PmyXSfxHBd"
  }
  if (date === 11) {
    return "JeaxXvkyPf"
  }
  if (date === 12) {
    return "u4Tvkba21wc"
  }
  if (date === 13) {
    return "39Etc2orc"
  }
  if (date === 14) {
    return "51DAA5Tfaxc"
  }
  if (date === 14) {
    return "Dd2EY018Me"
  }
  if (date === 15) {
    return "Z8UDIRuXLmb"
  }
  if (date === 16) {
    return "ZvzkyXnWLuc"
  }
  if (date === 17) {
    return "FYobM71o4ob"
  }
  if (date === 18) {
    return "G6pr4EQfiqc"
  }
  if (date === 19) {
    return "oGBIRKuPukb"
  }
  if (date === 20) {
    return "2giGYLeiGe"
  }
  if (date === 21) {
    return "D5wAA5o4TCd"
  }
  if (date === 22) {
    return "exH6pOuzXDd"
  }
  if (date === 23) {
    return "It4Etrjiqrc"
  }
  if (date === 24) {
    return "9pW8xXgiiqc"
  }
}

function setupJoke(joke) {
  const [jokeQuestion, answer] = joke.split("?")
  if (!jokeQuestion || !answer) {
    const [jokeQuestion, answer] = joke.split(",")
    if (!jokeQuestion || !answer) {
      const [jokeQuestion, answer] = joke.split(".")
      return { joke: jokeQuestion, answer }
    }
    return { joke: jokeQuestion, answer }
  }
  return { joke: jokeQuestion, answer }
}

const cache = {}
function memoize(key, cb) {
  if (cache[key]) {
    return cache[key]
  }
  const value = cb()
  cache[key] = value
  return value
}

export default async function getJoke(req, res) {
  const {
    query: { id },
  } = req

  const today = new Date().getDay()
  if (today <= id) {
    return res.json({ tooEarly: true })
  }

  const { joke } = await memoize(id, async () => {
    const dateId = getId(Number(id))
    return await axios
      .get(`https://icanhazdadjoke.com/j/${dateId}`, {
        headers: { Accept: "application/json" },
      })
      .then((res) => res.data)
  })
  res.json(setupJoke(joke))
}
