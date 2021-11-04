import { Button, Form, FormGroup } from 'reactstrap'
import "./Companies.css";
function Jobs() {

    return (
        <Form className="companies">
            <FormGroup>
                <input placeholder="Enter Search Term..." name="search" type="text" />
                <Button color="primary" size="lg">Search </Button>
            </FormGroup>
        </Form>
    )
}




export default Jobs;