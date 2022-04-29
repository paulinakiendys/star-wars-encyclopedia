import { Button, Form, FormControl, InputGroup } from "react-bootstrap"
const SearchForm = ({ handleSubmit, searchInput, setSearchInput }) => {
    return (
        <Form onSubmit={handleSubmit} className="mt-4">
            <InputGroup className="mb-3">
                <FormControl
                    onChange={e => setSearchInput(e.target.value)}
                    placeholder="Enter search"
                    type="text"
                    value={searchInput}
                />
                <Button variant="success" type="submit" disabled={!searchInput.length}>
                    Search
                </Button>
            </InputGroup>
        </Form>
    )
}

export default SearchForm