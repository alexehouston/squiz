import sendRequest from "./send-request";
const BASE_URL = '/api/quiz';

export async function startQuiz() {
    return sendRequest(BASE_URL);
}