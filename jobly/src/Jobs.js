import { Button, Form, FormGroup } from 'reactstrap'
import "./Companies.css";
import JobsList from './JobsList';
function Jobs() {

    return (
        <Form className="companies">
            <FormGroup>
                <input placeholder="Enter Search Term..." name="search" type="text" />
                <Button color="primary" size="lg">Search </Button>
            </FormGroup>
            <JobsList />
        </Form>
    )
}




export default Jobs;