export const ROUTES = {
  HOME: "/",
  PRODUCT_DETAILS: "/products/:id",
  CHECKOUT: "/checkout",
};

export const KeyFeatureLabels = {
  screen_size: "Screen Size",
  ram: "RAM",
  camera: "Camera",
  storage: "Storage",
  dual_sim: "Dual SIM",
  processor: "Processor",
};

export const STORE_NAME = "Fingertips Store";
export const HEADER_TITLE = "Hallo World";

export const TOOLTIP_ICON_ALT = "Product details tooltip icon";
export const TOOLTIP_MODAL_HEADING_DESCRIPTION = "Description";
export const TOOLTIP_MODAL_HEADING_KEY_FEATURES = "Key Features";
export const TOOLTIP_MODAL_NO_KEY_FEATURES = "No key features available.";

export const ADD_TO_CART_LABEL = "Add to Cart";
export const SHOPPING_CART_BUTTON_TEXT = "Shopping Cart";
export const CART_TITLE = (count) =>
  `You have ${count} item${count !== 1 ? "s" : ""} in your cart!`;
export const TABLE_HEADERS = ["Items", "Units", "Price"];
export const TOTAL_ORDER_VALUE = "Total Order Value";
export const EMPTY_CART_MESSAGE = "Your cart is empty!";
export const CART_BUTTON_CHECKOUT = "Checkout";
export const CHECKOUT_EMPTY_CART_MESSAGE =
  "Thank you for your purchase! Your cart is now empty.";
export const CHECKOUT_PAYMENT_BUTTON_TEXT = "Proceed to Payment";
export const BACK_TO_LISTING_PAGE_BUTTON_TEXT = "← Back to the listing page";

export const PRODUCT_NOT_FOUND_TEXT = "Product not found!";

export const FOOTER_TEXT = `© ${new Date().getFullYear()} All rights reserved | Agnes Slezsak`;
