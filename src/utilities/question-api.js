import sendRequest from "./send-request";
const BASE_URL = '/api/questions';

export async function getQuestions() {
    return sendRequest(BASE_URL);
}