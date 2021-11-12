import { useState, useEffect } from 'react';

import SearchForm from './SearchForm';
import JoblyApi from './api';
import "./Companies.css";
import CompanyCard from "./CompanyCard";

function Companies() {

    const [cList, setCList] = useState([]);

    useEffect(() => {
        searchCompanyByName();
    }, []);
    async function searchCompanyByName(name) {
        const result = await JoblyApi.getCompaniesList(name);
        setCList(result.companies);
    }

    if (!cList) return 'Loading';
    return (
        <>
            <SearchForm search={searchCompanyByName} />
            {cList.length ?
                < CompanyCard cList={cList} />
                :
                <p>No results found</p>
            }
        </>
    )
}




export default Companies;