import { useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTenderDashboard } from "./features/vendor/tender/tenderSlice";
import {
  selectTenderRequestError,
  selectTenderRequestStatus,
} from "./features/vendor/tender/tenderSelectors";
import { vendorRoutes } from "./routes/vendorRoutes";
import { internalRoutes } from "./routes/internalRoutes";

function App() {
  const dispatch = useDispatch();
  const status = useSelector(selectTenderRequestStatus);
  const error = useSelector(selectTenderRequestError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTenderDashboard());
    }
  }, [dispatch, status]);

  const routeElement = useRoutes([
    ...vendorRoutes,
    ...internalRoutes,
    { path: "*", element: <Navigate to="/" replace /> },
  ]);

  return (
    <>
      {status === "failed" ? (
        <div className="bg-red-100 px-4 py-2 text-sm text-red-700">Gagal memuat data dashboard: {error}</div>
      ) : null}
      {routeElement}
    </>
  );
}

export default App;