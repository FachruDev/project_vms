import DashboardPage from "../pages/vendor/DashboardPage";
import TenderDetailPage from "../pages/vendor/TenderDetailPage";
import TenderRegisterPage from "../pages/vendor/TenderRegisterPage";

export const vendorRoutes = [
  { path: "/", element: <DashboardPage /> },
  { path: "/tender/:tenderId/detail", element: <TenderDetailPage /> },
  { path: "/tender/:tenderId/register", element: <TenderRegisterPage /> },
];