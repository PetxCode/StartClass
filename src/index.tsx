import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRoute";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./Global/store";
import { Provider } from "react-redux";
import ErrorHandler from "./utils/ErrorBoundary";
import { Suspense } from "react";
import LoadingState from "./components/LoadingState";
import { ErrorBoundary } from "react-error-boundary";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingState />}>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={mainRoute} />
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </Suspense>
    ,
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
