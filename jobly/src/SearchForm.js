import { useState } from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import "./Companies.css";

function SearchForm({ search }) {

    const [searchCompany, setSearchCompany] = useState({
        search: ""
    });
    function handleChange(evt) {
        const { name, value } = evt.target;
        setSearchCompany(data => ({
            ...data,
            [name]: value
        }));
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        let data = searchCompany.search;
        search(data);
    }
    return (
        <Form className="companies" onSubmit={handleSubmit}>
            <FormGroup >
                <input placeholder="Enter Search Term..." name="search" type="text" value={searchCompany.search} onChange={handleChange} />
                <Button color="primary" size="lg">Search </Button>
            </FormGroup>
        </Form>
    )
}

export default SearchForm;