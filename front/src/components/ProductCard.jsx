import { Rate, Button, notification } from "antd"
import { Eye, Heart } from 'lucide-react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatcher = useDispatch();

  const addProductIntoCart = () => {
    const cartProduct = {
      id: product._id,
      name: product.name,
      brand: product.brand,
      price: (product.discounted_price > 0) ? product.discounted_price : product.price,
      quantity: 1,
      color: product.color || 'Default',
      size: product.size || 'M',
      image: product.images[0]
    };

    dispatcher(addToCart(cartProduct));

    notification.success({
      message: 'Product Added',
      description: `${product.name} has been added to your cart!`,
      placement: 'topRight',
    });
  }

  return (
    <div className="bg-[#e2e8f096] rounded-2xl p-4 flex-1 mx-auto">
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full rounded-lg h-[300px] object-fill"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <div className="flex items-center space-x-1 mt-1">
          <Rate allowHalf defaultValue={4.5} />
        </div>
        <p className="text-xl font-bold text-gray-900 mt-2">{product.price}</p>
        <div className="flex items-center space-x-2 mt-4">
          <Button onClick={addProductIntoCart} color="danger" variant="solid">
            Add to cart
          </Button>
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add To Cart
            </button> */}
          <Link to='/detail' className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
            <Eye size={20} />
          </Link>
          <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
            <Heart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard