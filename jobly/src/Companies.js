import { useState, useEffect } from 'react';
import { Button, Form, FormGroup } from 'reactstrap'
import JoblyApi from './api';
import "./Companies.css";
import CompaniesList from './CompaniesList';
import CompanyCard from './CompanyCard';
function Companies() {

    const [cList, setCList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchCompany, setSearchCompany] = useState({
        search: ""
    });
    useEffect(() => {
        async function getCompanyList() {
            const response = await JoblyApi.getCompaniesList();
            setCList(response.companies);
        }
        getCompanyList();
    }, []);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setSearchCompany(data => ({
            ...data,
            [name]: value
        }));
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        let cname = searchCompany.search;
        setSearchCompany(cname);
        console.log(`SEARCH ${JSON.stringify(searchCompany)}`);
        async function searchCompanyByName() {
            let searchName = searchCompany.search;
            const result = await JoblyApi.searchACompany(searchName);
            setSearchList(result.companies);
        }
        searchCompanyByName();
    }
    return (
        <>
            <Form className="companies" onSubmit={handleSubmit}>
                <FormGroup >
                    <input placeholder="Enter Search Term..." name="search" type="text" value={searchCompany.search} onChange={handleChange} />
                    <Button color="primary" size="lg">Search </Button>
                </FormGroup>
            </Form>
            <CompaniesList cList={cList} />

        </>
    )
}




export default Companies;