import PropTypes from 'prop-types'
import { Button, Card, Col, ListGroup } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { getIdFromUrl } from "../../helpers"
const FilmsItem = ({ film: { title, episode_id, release_date, characters, url } }) => {
    return (
        <Col>
            <Card className='dark-grey shadow'>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <ListGroup variant="flush" className='mb-4 dark-theme rounded'>
                        <ListGroup.Item><strong>Episode </strong>{episode_id}</ListGroup.Item>
                        <ListGroup.Item><strong>Released </strong>{release_date}</ListGroup.Item>
                        <ListGroup.Item>{characters.length} <strong>characters</strong></ListGroup.Item>
                    </ListGroup>
                    <Button variant="outline-primary" as={Link} to={getIdFromUrl(url)}>Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

FilmsItem.propTypes = {
    film: PropTypes.object.isRequired
}

export default FilmsItem