import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {

    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.log(`ENDPOINT ${endpoint} , DATA=${JSON.stringify(data)}`);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${JoblyApi.token}` };
        const params = (method === "get") ? data : {};
        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes

    /** Get details on a company by handle. */

    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company;
    }

    //get all companies or get a company by name
    static async getCompaniesList(name) {

        let res = await this.request('companies', { name });
        return res;
    }
    //Get all the jobs
    static async getJobsList(title) {

        let res = await this.request('jobs', { title });
        return res;
    }

    //Get token from Login from username password

    static async login(data) {
        let res = await this.request('auth/token', data, "post");
        return res.token;
    }

    //register a new user

    static async signup(data) {
        let res = await this.request('auth/register', data, "post");
        return res.token;
    }

    static async getCurrentUser(username) {

        let res = await this.request(`users/${username}`);
        return res.user;
    }

    // update the user
    static async saveProfile(username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
    }
    // Apply for jobs

    static async applyForJob(username, id) {
        let res = await this.request(`users/${username}/jobs/${id}`, {}, "post");
    }
}

export default JoblyApi;