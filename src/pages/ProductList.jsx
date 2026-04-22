import { React, useState} from "react"
import ProductCard from "../components/ProductCard"
import SearchFilter from "../components/SearchFilter"
import CategoryFilter from "../components/CategoryFilter"
import { useCart } from "../context/CartContext"

const ProductList = () => {
const { products } = useCart();

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filterProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto p-8 text-white">
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <h2 className="text-2xl font-bold mx-auto px-4 md:px-4 pt-4">Featured Gear {products.length} Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 justify-items-center">
        {filterProducts.map((product , index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
