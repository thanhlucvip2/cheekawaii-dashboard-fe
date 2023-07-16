import { QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

// import { Button, Spinner } from '@/components/Elements';
// import { Notifications } from '@/components/Notifications/Notifications';
// import { AuthLoader } from '@/lib/auth';
import { AuthLoader } from "src/lib/auth";
import { queryClient } from "src/lib/react-query";

const ErrorFallback = () => {
  return (
    <div>
      <h2>Ooops, something went wrong :( </h2>
      {/* <Button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button> */}
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div>
          {/* <Spinner /> */}
          loading
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {/* <Notifications /> */}
            {/* <Spinner /> */}
            <AuthLoader
              renderLoading={() => (
                <div>
                  {/* <Spinner /> */}
                  loading
                </div>
              )}
            >
              <Router>{children}</Router>
            </AuthLoader>
            {/* <Router>{children}</Router> */}
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
