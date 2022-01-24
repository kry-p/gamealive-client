/*
 * API caller
 */
import axios from 'axios';

const client = axios.create();

// for local test
// client.defaults.baseURL = 'http://localhost:4000';

export default client;
