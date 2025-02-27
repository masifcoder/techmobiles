import ProductCard from "./ProductCard";



const ProductsSection = ({products}) => {
    return (
        <div>
            <h2 className="text-3xl font-bold my-2 p-5">Featured Products</h2>
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