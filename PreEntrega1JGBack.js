class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("All fields must be filled.");
        return;
      }
  
      if (this.products.some(product => product.code === code)) {
        console.error("Product with the same code already exists.");
        return;
      }
  
      const id = this.products.length + 1;
  
      const newProduct = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
    
      this.products.push(newProduct);
  
      console.log("Product added successfully:", newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (product) {
        return product;
      } else {
        console.log("Not found.");
        return null;
      }
    }
  }
  

  const productManager = new ProductManager();
  
  productManager.addProduct("Producto Prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
  
  
  const allProducts = productManager.getProducts();
  console.log("All products:", allProducts);
  
  const productById = productManager.getProductById(2);
  console.log("Product by ID:", productById);
  
  const nonExistentProduct = productManager.getProductById(4); 
  