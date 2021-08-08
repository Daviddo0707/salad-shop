import { lazy } from "react";
const LandingPage = lazy(() => import("./pages/landing-page/LandingPage"));
const Ingredients = lazy(() => import("./pages/ingredients/Ingredients"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));

export const routes = [
  { path: "/", component: <LandingPage /> },
  { path: "/ingredients", component: <Ingredients /> },
  { path: "/checkout", component: <Checkout /> },
];
