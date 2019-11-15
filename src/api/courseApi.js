import {
    handleResponse,
    handleError
} from "./apiUtils";
const baseUrl = process.env.API_URL + "/courses/";

export function getCourse() {
    return fetch(baseUrl)
        .then(handleResponse)
        .then(handleError);
}

export function saveCourse(course) {
    return fetch(baseUrl + (course.id || ""), {
            method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(course)
        }).then(handleResponse)
        .then(handleError);
}

export function deleteCourse(courseId) {
    return fetch(baseUrl + courseId, {
            method: "DELETE"
        }).then(handleResponse)
        .then(handleError);
}