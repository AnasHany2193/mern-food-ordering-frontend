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

export type MenuItem = {
  _id: string;
  name: string;
  price: number;
};

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

export type RestaurantSearch = {
  data: Restaurant[];
  pagination: { page: number; total: number; limit: number; pages: number };
};
