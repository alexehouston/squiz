import sendRequest from "./send-request";
const BASE_URL = '/api/quiz';

export async function getQuizData() {
    return sendRequest(BASE_URL);
}

export async function saveQuizData() {
    return sendRequest(BASE_URL, 'POST');
}