import { useEffect, useState, useRef } from "react"
import swapi from "../../services/swapi"
import { Row } from "react-bootstrap"
import FilmsItem from "./FilmsItem"
import { getIdFromUrl } from "../../helpers"
import LoadingSpinner from "../layout/LoadingSpinner"
import Pagination from "../layout/Pagination"
import SearchForm from "../layout/SearchForm"
import { useSearchParams } from "react-router-dom"

const FilmsResults = () => {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState(null)
    const [hits, setHits] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({ query: '', page: 1 })
    const searchInputRef = useRef()

    const query = searchParams.get('query')
    const page = searchParams.get('page')

    useEffect(() => {
        fetchFilms(query, page)
    }, [query, page])

    const fetchFilms = async (query, page) => {
        const data = await swapi.getFilms(query, page)
        setData(data)
        setFilms(data.results)
        setLoading(false)
        setHits(data.results)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if (!searchInput.length) {
            return
        }

        // set page to 1
        // @todo

        // set input value as query in URLSearchParams
        setSearchParams({ query: searchInput })
    }

    // react to changes in our page state
    useEffect(() => {
        if (!query) {
            setSearchInput('')
            setSearchResult(null)
            return
        }

        setSearchInput(query)
        fetchFilms(query, page)
    }, [query, page])

    if (!loading) {
        return (
            <>
                <h1>Films</h1>

                <SearchForm
                    handleSubmit={handleSubmit}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    searchInputRef={searchInputRef}
                />
                {searchResult && (
                    <div className="search-result mt-4">
                        <p>Showing {searchResult.count} search result(s) for "{searchInput}"...</p>

                        <Row xs={1} md={3} className="g-4">
                            {
                                hits.map((film) =>
                                (
                                    <FilmsItem key={getIdFromUrl(film.url)} film={film} />
                                ))}
                        </Row>

                        <Pagination data={searchResult} page={page} setSearchParams={setSearchParams} />
                    </div>
                )}

                <Row xs={1} md={3} className="g-4">
                    {
                        films.map((film) =>
                        (
                            <FilmsItem key={getIdFromUrl(film.url)} film={film} />
                        ))
                    }
                </Row>
                <Pagination data={data} page={page} query={query} setSearchParams={setSearchParams} />
            </>
        )
    } else {
        return (
            <LoadingSpinner />
        )
    }
}

export default FilmsResults