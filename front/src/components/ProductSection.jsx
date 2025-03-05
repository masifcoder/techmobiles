import ProductCard from "./ProductCard";
import { Link } from 'react-router-dom';



const ProductsSection = ({products}) => {
    return (
        <div>
            <div className="flex justify-between items-center p-5">
                <h2 className="text-3xl font-bold my-2">Featured Products</h2>
                <Link 
                    to="/products" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                    View All
                </Link>
            </div>
            <div className="grid grid-cols-4 gap-6 justify-center px-10">
               {
                products && products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))
               }
            </div>
        </div>

    );
};

export default ProductsSection;