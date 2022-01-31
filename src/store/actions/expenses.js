import axios from "axios"

export const showModal = () => {
    return {
        type: "SHOW_MODAL",
        payload: true
    }
}

export const hideModal = () => {
    return {
        type: "HIDE_MODAL",
        payload: false
    }
}

export const getEntries = () => async (dispatch) => {
    const response = await axios.get('https://my-json-server.typicode.com/mfrhn18/daily-expenses/items')
    // const response = await axios.get('http://localhost:3005/items')
    // const data = await response.json()

    dispatch({
        type: "SUCCESS_GET_ENTRIES",
        payload: response.data
    })
}

export const addEntries = (entry) => {
    return {
        type: "ADD_ENTRY",
        payload: entry
    }
}