import PropTypes from 'prop-types'
import { Button, Card, Col, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { getIdFromUrl } from "../../helpers"
const PeopleItem = ({ person: { name, gender, birth_year, films, url } }) => {
    return (
        <Col>
            <Card className='dark-grey shadow'>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <ListGroup variant="flush"  className='mb-4 dark-theme rounded'>
                        <ListGroup.Item><strong>Gender </strong>{gender}</ListGroup.Item>
                        <ListGroup.Item><strong>Born </strong>{birth_year}</ListGroup.Item>
                        <ListGroup.Item><strong>In </strong>{films.length} film(s)</ListGroup.Item>
                    </ListGroup>
                    <Button variant="outline-primary" as={Link} to={getIdFromUrl(url)}>Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

PeopleItem.propTypes = {
    person: PropTypes.object.isRequired
}

export default PeopleItem