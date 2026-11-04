import { products } from './products.js';

const storageKey = 'forma-cart';

export function getCart() {
	try {
		const savedCart = JSON.parse(localStorage.getItem(storageKey) || '[]');
		if (!Array.isArray(savedCart)) return [];
		return savedCart.filter(
			(item) =>
				products.some((product) => product.id === item.id) &&
				Number.isInteger(item.quantity) &&
				item.quantity > 0,
		);
	} catch (error) {
		console.error('Unable to read the saved FORMA shopping bag.', error);
		return [];
	}
}

export function saveCart(cart) {
	localStorage.setItem(storageKey, JSON.stringify(cart));
	window.dispatchEvent(new CustomEvent('forma:cart-updated', { detail: { cart } }));
}

export function addToCart(productId) {
	if (!products.some((product) => product.id === productId)) return getCart();
	const cart = getCart();
	const existingItem = cart.find((item) => item.id === productId);
	if (existingItem) existingItem.quantity += 1;
	else cart.push({ id: productId, quantity: 1 });
	saveCart(cart);
	return cart;
}

export function getCartCount(cart = getCart()) {
	return cart.reduce((total, item) => total + item.quantity, 0);
}
