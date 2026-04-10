import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="container mx-auto px-4 py-28">
        <Card className="max-w-lg mx-auto border-0 card-elevated premium-border overflow-hidden">
          <CardContent className="p-10 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <span className="font-heading text-2xl font-bold text-primary">404</span>
            </div>
            <h1 className="mb-2 text-3xl md:text-4xl font-heading font-bold">Page not found</h1>
            <p className="mb-6 text-muted-foreground">The page you’re looking for doesn’t exist or was moved.</p>
            <Link to="/" className="inline-flex rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium">
              Go back home
            </Link>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default NotFound;
