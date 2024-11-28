import { useRoutes } from "react-router-dom";
import routes from "./routes.js";
import { Suspense } from "react";

export default function Router() {
  return <Suspense fallback={<div />}>{useRoutes(routes)}</Suspense>;
}
