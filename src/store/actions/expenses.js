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

export const getEntries = () => async () => {
    const response = await fetch('http://localhost:3005/items')
    const data = await response.json()

    console.log(data)

    return{
        type: "SUCCESS_GET_ENTRIES",
        payload: data
    }

    // try {
    //     dispatch({
    //         type: "LOAD_ENTRIES"
    //     })

    //     const response = await axios.get('http://localhost:3005/items')
    //     // const data = await response.json()

    //     dispatch({
    //         type: "SUCCESS_GET_ENTRIES",
    //         payload: response
    //     })
    // } catch(e) {
    //     dispatch({
    //         type: "FAILED_GET_ENTRIES"
    //     })
    // }
}

export const addEntries = (entry) => {
    return {
        type: "ADD_ENTRY",
        payload: entry
    }
}