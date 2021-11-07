import { Button, Form, FormGroup } from 'reactstrap'
import "./Companies.css";
import CompaniesList from './CompaniesList';
function Companies() {

    return (
        <Form className="companies">
            <FormGroup>
                <input placeholder="Enter Search Term..." name="search" type="text" />
                <Button color="primary" size="lg">Search </Button>
            </FormGroup>
            <CompaniesList />
        </Form>
    )
}




export default Companies;