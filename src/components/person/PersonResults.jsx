import { useEffect, useState } from "react"
import swapi from "../../services/swapi"
import { useParams } from "react-router-dom"
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { getIdFromUrl } from "../../helpers"
import LoadingSpinner from "../layout/LoadingSpinner"
import LinkItem from "../layout/LinkItem"
const PersonResults = () => {
    const { id } = useParams()
    const [person, setPerson] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        fetchPerson()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchPerson = async () => {
        const data = await swapi.getPerson(id)
        setPerson(data)
        setLoading(false)
    }

    if (!loading) {
        return (
            <Card className="my-4 dark-grey shadow">
                <Card.Header>{person.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Attributes</Card.Title>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Gender</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <Card.Text>{person.gender}</Card.Text>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Birth year</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <Card.Text>{person.birth_year}</Card.Text>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Height</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <Card.Text>{person.height} cm</Card.Text>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Mass</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <Card.Text>{person.mass} kg</Card.Text>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Hair color</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <Card.Text>{person.hair_color}</Card.Text>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Skin color</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <Card.Text>{person.skin_color}</Card.Text>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Eye color</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <Card.Text>{person.eye_color}</Card.Text>
                        </Col>
                    </Row>
                    <Card.Title>Links</Card.Title>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Card.Text><strong>Films</strong></Card.Text>
                        </Col>
                        <Col md={8}>
                            <ListGroup>
                                {
                                    person.films.map((film) =>
                                    (
                                        <LinkItem key={getIdFromUrl(film)} category={film} label="Film" resource="films" />
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

export default PersonResults