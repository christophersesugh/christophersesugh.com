import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "context/auth-context";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();
  const { user } = useAuth();

  React.useLayoutEffect(() => {
    if (!user || user === null) {
      router.push("/login");
    }
  }, [router, user]);

  return <>{children}</>;
};

const withAuth = (Component: React.ComponentType<any>) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => (
    <PrivateRoute>
      <Component {...props} />
    </PrivateRoute>
  );
};

export { withAuth };
