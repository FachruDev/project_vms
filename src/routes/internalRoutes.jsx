import InternalDashboardPage from "../pages/internal/InternalDashboardPage";
import InternalTenderDetailPage from "../pages/internal/InternalTenderDetailPage";
import InternalTechnicalEvaluationPage from "../pages/internal/InternalTechnicalEvaluationPage";

export const internalRoutes = [
  { path: "/internal", element: <InternalDashboardPage /> },
  { path: "/internal/tender/:tenderId/detail", element: <InternalTenderDetailPage /> },
  { path: "/internal/tender/:tenderId/evaluasi-teknis", element: <InternalTechnicalEvaluationPage /> },
];
