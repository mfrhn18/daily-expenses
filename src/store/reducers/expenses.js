const initState = {
    expenses: [
        {
            id: 1,
            date: "27 January",
            entries: [
                {
                    id: 1,
                    timestamp: "10.00",
                    item: "pisang goreng",
                    price: "10000"
                },
                {
                    id: 2,
                    timestamp: "12.00",
                    item: "es kopi susu",
                    price: "20000"
                }
            ],
            total: "30000"
        },
        {
            id: 2,
            date: "28 January",
            entries: [
                {
                    id: 1,
                    timestamp: "10.00",
                    item: "nasi uduk",
                    price: "10000"
                },
                {
                    id: 2,
                    timestamp: "11.00",
                    item: "es teh",
                    price: "5000"
                }
            ],
            total: "15000"
        },
        {
            id: 3,
            date: "29 January",
            entries: [
                {
                    id: 1,
                    timestamp: "10.00",
                    item: "bubur ayam",
                    price: "10000"
                }
            ],
            total: "10000"
        },
        {
            id: 4,
            date: "30 January",
            entries: [
                {
                    id: 1,
                    timestamp: "07.00",
                    item: "lontong sayur",
                    price: "12000"
                },
                {
                    id: 2,
                    timestamp: "15.00",
                    item: "es jeruk",
                    price: "10000"
                }
            ],
            total: "22000"
        }
    ],
    loading: false,
    // expenses: [],
    show: false
}

const expensesReducer = (state = initState, action) => {
    const { type, payload } = action
    switch(type) {
        case "LOAD_ENTRIES":
            return {
                ...state,
                loading: true,
                show: false
            }
        case "SUCCESS_GET_ENTRIES":
            return {
                ...state,
                loading: false,
                expenses: payload,
                show: false
            }
        case "FAILED_GET_ENTRIES":
            return {
                ...state,
                loading: false,
                show: false
            }
        case "SHOW_MODAL":
            return {
                ...state,
                show: payload
            }
        case "HIDE_MODAL":
            return {
                ...state,
                show: payload
            }
        case "ADD_ENTRY":
            const latestEntry = state.expenses[Object.keys(state.expenses)[Object.keys(state.expenses).length-1]] // get the latest entry
            const date = new Date().getUTCDate()
            const month = new Date().toLocaleDateString('default', { month: 'long' })
            const time = new Date().getHours() + "." + new Date().getMinutes()
            const currentDate = date + " " + month
            console.log(currentDate, latestEntry)

            if(currentDate === latestEntry.date) {  // check if current date is the same date as the latest entry, add to latest expenses entries
                const expenses = state.expenses.filter(item => item.id !== latestEntry.id)
                const id = latestEntry.entries.length
                const entries = latestEntry.entries
                const newEntry = {
                    id: id + 1,
                    timestamp: time,
                    item: payload.item,
                    price: payload.price
                }
                entries.push(newEntry)
                const totalprice = entries.reduce((previousValue, currentValue) => {
                    return(previousValue += parseInt(currentValue.price))
                }, 0)
                const currentEntry = {
                    id: latestEntry.id,
                    date: latestEntry.date,
                    entries: entries,
                    total: totalprice
                }
                return{
                    expenses: [...expenses, currentEntry]
                }
            } else {  // if current date is a new date, add to expenses
                const id = state.expenses.length
                const newExpense = {
                    id: id + 1,
                    date: currentDate,
                    entries: [
                        {
                            id: 1,
                            timestamp: time,
                            item: payload.item,
                            price: payload.price
                        }
                    ],
                    total: payload.price
                }
                alert("different date detected")
                return{
                    expenses: [...state.expenses, newExpense]
                }
            }
        default:
            return state
    }
}

export default expensesReducer;