import { Link } from "react-router-dom"
const NotFound = () => {
    return (
        <div className="text-center">
            <h1 className="mb-4">404 - Page not found</h1>
            <Link to='/' className="btn btn-primary btn-lg">
                Back to home
            </Link>
        </div>
    )
}

export default NotFound