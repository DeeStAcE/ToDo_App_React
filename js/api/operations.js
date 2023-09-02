import {API_KEY, API_URL} from "./constants";

/**
 * Fetch all operations
 * @param {string} id - ID of task
 * @param {function} successCallback - Function that saves incoming data
 */
export const getOperations = async (id, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Błąd!");
        }

        successCallback(data.data);
    } catch (err) {
        console.log(err);
    }
};


/**
 * Add new operation
 */
export const addNewOperation = async (id, operation, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
           method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: API_KEY,
            },
            body: JSON.stringify(operation)
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Błąd!");
        }

        successCallback(data.data);
    } catch (err) {
        console.log(err);
    }
};

// TODO
// getOperation
// updateOperation
// deleteOperation