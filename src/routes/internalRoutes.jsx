import InternalDashboardPage from "../pages/internal/InternalDashboardPage";
import InternalTenderDetailPage from "../pages/internal/InternalTenderDetailPage";

export const internalRoutes = [
  { path: "/internal", element: <InternalDashboardPage /> },
  { path: "/internal/tender/:tenderId/detail", element: <InternalTenderDetailPage /> },
];
