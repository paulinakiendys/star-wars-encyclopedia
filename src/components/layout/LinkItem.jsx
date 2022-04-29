import PropTypes from 'prop-types'
import { Button, ListGroup } from "react-bootstrap"
import { getIdFromUrl } from "../../helpers"
import { Link } from "react-router-dom"
const LinkItem = ({ category, label, resource }) => {
    return (
        <ListGroup.Item className='bg-dark'>
            <Button
                as={Link}
                to={`/${resource}/${getIdFromUrl(category)}`}
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