/**
 * User interface
 * @description User interface that contains all the information about a user
 */
export type User = {
  _id: string;
  name: string;
  city: string;
  email: string;
  country: string;
  addressLine1: string;
};

/**
 * Menu item interface
 * @description Menu item interface that contains all the information about a menu item
 */
export type MenuItem = {
  _id: string;
  name: string;
  price: number;
};

/**
 * Restaurant interface
 * @description Restaurant interface that contains all the information about a restaurant
 */
export type Restaurant = {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  imageUrl: string;
  lastUpdated: string;
};

/**
 * RestaurantSearch interface
 * @description RestaurantSearch interface that contains all the information about a restaurant search
 */
export type RestaurantSearch = {
  data: Restaurant[];
  pagination: { page: number; total: number; limit: number; pages: number };
};

/**
 * OrderStatus interface
 * @description OrderStatus interface that contains all the information about an order status
 */
export type OrderStatus =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered";

/**
 * Order interface
 * @description Order interface that contains all the information about an order
 */
export type Order = {
  _id: string;
  restaurant: Restaurant;
  user: User;
  cartItems: {
    name: string;
    quantity: string;
    menuItemId: string;
  }[];
  deliveryDetails: {
    name: string;
    city: string;
    email: string;
    country: string;
    addressLine1: string;
  };
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  restaurantId: string;
};
