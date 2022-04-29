import { useEffect, useState } from "react"
import swapi from "../../services/swapi"
import { useParams } from "react-router-dom"
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { getIdFromUrl } from "../../helpers"
import LoadingSpinner from "../layout/LoadingSpinner"
import LinkItem from "../layout/LinkItem"
const FilmResults = () => {
    const { id } = useParams()
    const [film, setFilm] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        fetchFilm()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchFilm = async () => {
        const data = await swapi.getFilm(id)
        setFilm(data)
        setLoading(false)
    }

    if (!loading) {
        return (
            <Card className="my-4 dark-grey shadow">
                <Card.Header>{film.title}</Card.Header>
                <Card.Body>
                    <Card.Title>Attributes</Card.Title>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Episode</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <Card.Text>{film.episode_id}</Card.Text>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Director</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <Card.Text>{film.director}</Card.Text>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Producer</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <Card.Text>{film.producer}</Card.Text>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Release date</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <Card.Text>{film.release_date}</Card.Text>
                        </Col>
                    </Row>
                    <Card.Title>Links</Card.Title>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Characters</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <ListGroup>
                                {
                                    film.characters.map((character) =>
                                    (
                                        <LinkItem key={getIdFromUrl(character)} category={character} label="Character" resource="people" />
                                    ))
                                }
                            </ListGroup>
                        </Col>
                    </Row>
                    <Button variant="secondary" onClick={() => navigate(-1)}>« Back</Button>
                </Card.Body>
            </Card>
        )
    } else {
        return (
            <LoadingSpinner />
        )
    }
}

export default FilmResults