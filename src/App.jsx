import { Header } from "./Header";
import { ProductsNew } from "./ProductsNew";

function ProductsIndex() {}

function Footer() {}

function ProductsPage() {
  return (
    <main>
      <ProductsNew />
      <ProductsIndex />
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <ProductsPage />
      <Footer />
    </div>
  );
}

export default App;