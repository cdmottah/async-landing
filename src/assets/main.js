import { createProduct, productsContainer } from "./products.elements.js";
import productsService from "./products.service.js"


async function main() {
    try {
        const products = await productsService.getProducts();
        products.forEach(product => {
            productsContainer.appendChild(createProduct(product));
        });
    } catch (error) {
        console.error(error)
    }
}

main();