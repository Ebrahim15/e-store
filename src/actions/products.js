export const GET_PRODUCTS = "GET_PRODUCTS"
export const SELECT_PRODUCT = "SELECT_PRODUCT"
export const UPDATE_INVENTORY = "UPDATE_INVENTORY"

export function recieveProducts(products){
    return {
        type:GET_PRODUCTS,
        products
    }
}



export function selectProduct(productId, number){
    return {
        type:SELECT_PRODUCT,
        productId,
        number
    }
}

export function updateInventory(productId){
    return {
        type:UPDATE_INVENTORY,
        productId
    }
}