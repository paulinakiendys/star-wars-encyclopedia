import { useEffect, useState, useRef } from "react"
import swapi from "../../services/swapi"
import { Row } from "react-bootstrap"
import PeopleItem from "./PeopleItem"
import { getIdFromUrl } from "../../helpers"
import LoadingSpinner from "../layout/LoadingSpinner"
import Pagination from "../layout/Pagination"
import SearchForm from "../layout/SearchForm"
import { useSearchParams } from "react-router-dom"

const PeopleResults = () => {
    const [people, setPeople] = useState([])
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
        fetchPeople(query, page)
    }, [query, page])

    const fetchPeople = async (query, page) => {
        const data = await swapi.getPeople(query, page)
        setData(data)
        setPeople(data.results)
        setLoading(false)
        setHits(data.results)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if (!searchInput.length) {
            return
        }

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
        fetchPeople(query, page)
    }, [query, page])

    if (!loading) {
        return (
            <>
                <h1>People</h1>

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
                                hits.map((person) =>
                                (
                                    <PeopleItem
                                        key={getIdFromUrl(person.url)}
                                        person={person}
                                    />
                                ))}
                        </Row>

                        <Pagination
                            data={searchResult}
                            page={page}
                            query={query}
                            setSearchParams={setSearchParams}
                        />
                    </div>
                )}
                <Row xs={1} md={3} className="g-4">
                    {
                        people.map((person) =>
                        (
                            <PeopleItem
                                key={getIdFromUrl(person.url)}
                                person={person}
                            />
                        ))}
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

export default PeopleResults