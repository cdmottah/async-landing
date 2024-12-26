export default class ProductsService {
    static #apiUrl = 'https://api.escuelajs.co/api/v1/';

    static async getProducts() {
        try {
            const response = await fetch(`${this.#apiUrl}products`);
            if (!response.ok) {
                throw new Error('Error al obtener los productos');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }
}