const initialState = {
    basket: JSON.parse(localStorage.getItem("basket")) || [],
    filter: [],
    product: [],
    books: JSON.parse(localStorage.getItem("books")) || [],
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            return { ...state, product: action.payload };

        case "ADD_TO_BASKET":
            const foundProduct = state.basket.find((el) => el.id === action.payload.id);
            return foundProduct ? state : { ...state, basket: [...state.basket, { ...action.payload, quantity: action.payload.quantity }] };

        case "GET_BOOKS":
            const found = state.product.find((el) => el.id === action.payload);
            return { ...state, books: [{ ...found, quantity: 1,like:false }] };

        case "DELETE_QUANTITY":
            const deleteQuantity = state.books.find((el) => el.id === action.payload.id);
            if (deleteQuantity.quantity - 1 !== 0) {
                return {
                    ...state,
                    books: state.books.map((el) => (el.id === deleteQuantity.id ? { ...el, quantity: el.quantity - 1 } : el)),
                };
            } else {
                return state;
            }

        case "ADD_QUANTITY":
            const addQuantity = state.books.find((el) => el.id === action.payload.id);
            return {
                ...state,
                books: state.books.map((el) => (el.id === addQuantity.id ? { ...el, quantity: el.quantity + 1 } : el)),
            };
        case "CHANGE_LIKE":
            const like = state.books.find((el) => el.id === action.payload.id);
            return {...state,
                books: state.books.map((el) => (el.id === like.id ? { ...el, like:!el.like} : el)),}

        default:
            return state;
    }
};
