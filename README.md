# MERN Food Ordering - Frontend 🍔🍕🍜

Welcome to the frontend repository for **MERN Food Ordering App**! This is the user interface of the platform, built with **React**, **React Router**, and **Auth0** for authentication. The app enables users to browse restaurants, search for cuisines, add items to the cart, and securely check out via Stripe.

## Project Overview 🎨

This frontend is designed to integrate with the backend API [here](https://github.com/AnasHany2193/mern-food-ordering-backend). Together, they offer a complete food ordering experience.

### Key Features 🌟

- **User Authentication**: Auth0 integration for seamless login and registration.
- **Restaurant Browsing**: Explore local restaurants, search and filter results.
- **Cart & Checkout**: Add items, review the cart, and check out with Stripe.
- **Order History**: Track previous orders and status in real time.

## Project Video 📹

![A demo video](src/assets/mern-food-ordering.mp4)

## Setup Guide 🛠

### Prerequisites

- Node.js & npm
- Backend API (ensure [backend setup](https://github.com/AnasHany2193/mern-food-ordering-backend) is complete)

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AnasHany2193/mern-food-ordering-frontend.git
   cd mern-food-ordering-frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root with the following variables:

   ```plaintext
   VITE_API_BASE_URL=http://localhost:7000
   VITE_AUTH0_DOMAIN=<Your Auth0 Domain>
   VITE_AUTH0_CLIENT_ID=<Your Auth0 Client ID>
   VITE_AUTH0_REDIRECT_URI=<Your Stripe Public Key>
   VITE_AUTH0_AUDIENCE=<Your Auth0 API Audience>
   ```

4. **Run the App**:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Backend Setup 🌐

To complete the integration, ensure the backend setup is configured and running as detailed [here](https://github.com/AnasHany2193/mern-food-ordering-backend).

## Contributing 🤝

We welcome issues, pull requests, and feedback!
