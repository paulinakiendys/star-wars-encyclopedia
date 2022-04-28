/**
 * Star Wars API
 */
import axios from 'axios'

axios.defaults.baseURL = 'https://swapi.dev/api'

// eslint-disable-next-line no-unused-vars
const sleep = async delay => new Promise(r => setTimeout(r, delay))

/**
 * Get a single film
 */
const getFilm = async (id) => {
    return get(`/films/${id}`)
}

/**
 * Get a person
 */
const getPerson = async (id) => {
    return get(`/people/${id}`)
}

/**
 * Get all films
 */
const getFilms = async (query = null, page = null) => {
    return get(`films/?search=${query}&page=${page}`)
}

/**
 * Get all people
 */
const getPeople = async (query = null, page = null) => {
    return get(`people/?search=${query}&page=${page}`)
}

const get = async (endpoint) => {
    const response = await axios.get(endpoint)
    // await sleep(1500)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getFilms,
    getFilm,
    getPeople,
    getPerson,
}