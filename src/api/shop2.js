import { _getProducts, _getUsers } from "./DATA"

export function getInitialData () {
    return Promise.all([
        _getProducts(),
        _getUsers()
    ]).then(([products, users]) => ({
        products,
        users
    }))
}