import { useAuth0 } from "@auth0/auth0-react";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

type Props = {
  showHero?: boolean;
  children: React.ReactNode;
};

/**
 * Layout component
 * @description Layout component that wraps the app in a container with a header and footer and a hero section if needed
 */
const Layout = ({ showHero = false, children }: Props) => {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loader screen />;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {showHero && <Hero />}

      <div className="container flex-1 py-10 mx-auto">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
