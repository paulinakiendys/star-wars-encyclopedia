import { Button } from "react-bootstrap"
const Pagination = ({ data, page, query, setSearchParams }) => {
    return (
        <div className="d-flex justify-content-between align-items-center m-4">
            <div className="prev">
                <Button
                    disabled={!data.previous}
                    onClick={() => setSearchParams({query, page: page - 1})}
                    variant="primary"
                >Previous Page</Button>
            </div>
            <div className="page">Page {page}/{Math.ceil(data.count / 10)}</div>
            <div className="next">
                <Button
                    disabled={!data.next}
                    onClick={() => setSearchParams({query, page: parseInt(page) + 1})}
                    variant="primary"
                >Next Page</Button>
            </div>
        </div>
    )
}

export default Pagination