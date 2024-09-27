# Sneakers Shop

An e-commerce web application for sneaker enthusiasts, built with **Next.js**, **TailwindCSS**, **Redux**, and **Supabase** as the backend. The app allows users to browse, search, and filter through a variety of sneaker products, manage their cart, and maintain a wishlist.

## Demo

Check out the live demo here: [Sneakers Shop](https://sneakers-shop-zeta.vercel.app/)

## Screenshots

![Next Ecommerce screenshot](https://sneakers-shop-zeta.vercel.app/images/screenshots/screenshot1.png)

<!-- ![Next Ecommerce screenshot](https://lucaspulliese.com/wp-content/uploads/2020/09/ecommerce-2.jpg) -->

## Features

- **Search and Filter Products**: Easily search and filter sneakers by various criteria.
- **Product Pages**: View detailed information about individual sneakers.
- **Cart Management**: Add sneakers to your cart and proceed to checkout.
- **Wishlist**: Save sneakers to your wishlist for future purchases.
- **Responsive Design**: Fully responsive and optimized for mobile and desktop.

## Pages

- **Home Page**: `/` - A landing page showcasing new and featured sneakers.
- **Products Page**: `/shopping/all` - Browse and filter through all available sneakers.
- **Product Single Page**: `/product/1` - View details for a specific sneaker.
- **Cart Page**: `/cart` - Manage and view the items in your shopping cart.
- **Wishlist Page**: `/wishlist` - Save products to your wishlist for future purchase.

## Technologies Used

- **Frontend**:
  - [Next.js](https://nextjs.org/) - React framework for building web applications.
  - [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
  - [Redux Toolkit](https://redux-toolkit.js.org/) - For state management (cart, wishlist, filters).
- **Backend**:
  - [Supabase](https://supabase.com/) - Provides authentication, storage, and database services.

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sheyda0/sneakers-shop.git
   cd sneakers-shop

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Create a .env.local file in the root directory and add the necessary environment variables for Supabase:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   ```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
