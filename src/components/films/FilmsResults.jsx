import { useEffect, useState } from "react"
import swapi from "../../services/swapi"
import { Row } from "react-bootstrap"
import FilmsItem from "./FilmsItem"
import { getIdFromUrl } from "../../helpers"
import LoadingSpinner from "../layout/LoadingSpinner"
import Pagination from "../layout/Pagination"
import SearchForm from "../layout/SearchForm"
import { useSearchParams } from "react-router-dom"
const FilmsResults = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [searchParams, setSearchParams] = useSearchParams({ query: '', page: 1 })

    const query = searchParams.get('query')
    const page = searchParams.get('page')

    const fetchFilms = async (query, page) => {
        const data = await swapi.getFilms(query, page)
        setData(data)
        setLoading(false)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if (!searchInput.length) {
            return
        }

        setLoading(true)

        // set input value as query in URLSearchParams
        setSearchParams({ query: searchInput })
    }

    // react to changes in URLSearchParams
    useEffect(() => {
        fetchFilms(query, page)
    }, [query, page])

    if (!loading) {
        return (
            <>
                <h1 className="mt-4">Films</h1>

                <SearchForm
                    handleSubmit={handleSubmit}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />

                {query && (
                    <div className="search-result mt-4">
                        <p>{data.count} result(s) for "{query}"...</p>
                    </div>
                )}

                <Row xs={1} md={3} className="g-4">
                    {
                        data.results.map((film) =>
                        (
                            <FilmsItem
                                key={getIdFromUrl(film.url)}
                                film={film}
                            />
                        ))
                    }
                </Row>

                <Pagination
                    data={data}
                    page={page}
                    query={query}
                    setSearchParams={setSearchParams}
                />
            </>
        )
    } else {
        return (
            <LoadingSpinner />
        )
    }
}

export default FilmsResults