import AuthProvider from "./hooks/AuthProvider";
import LandingPage from "./layout/LandingPage";
import CategoryPage from "./view/CategoryPage";

export default function App() {
  return (
    <>
      <LandingPage />
      <CategoryPage />
    </>
  );
}
