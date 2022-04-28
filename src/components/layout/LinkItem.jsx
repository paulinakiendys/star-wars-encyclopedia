import PropTypes from 'prop-types'
import { Button, ListGroup } from "react-bootstrap"
import { getIdFromUrl } from "../../helpers"
import { Link } from "react-router-dom"

const LinkItem = ({ category, label }) => {
    return (
        <ListGroup.Item>
            <Button
                as={Link}
                to={`/people/${getIdFromUrl(category)}`}
                variant="link"
            >
                {label} {getIdFromUrl(category)} »
            </Button>
        </ListGroup.Item>
    )
}

LinkItem.propTypes = {
    category: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default LinkItem