export function ProductsNew() {
  <div id="products-new">
    <h1>New Post</h1>
    <form>
      name: <input type="text" required />
      description: <input type="text" required />
      price: <input type="number" min="1" max="1000" step="1" required />
      image: <input type="file" accept="image/*" required />
    </form>
  </div>;
}
