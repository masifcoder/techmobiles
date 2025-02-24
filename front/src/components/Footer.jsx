import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">ELECTRO</h2>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-blue-500 rounded-full text-white"><Facebook size={20} /></a>
            <a href="#" className="p-2 bg-blue-400 rounded-full text-white"><Twitter size={20} /></a>
            <a href="#" className="p-2 bg-pink-500 rounded-full text-white"><Instagram size={20} /></a>
          </div>
          <p>© 2023 Electro. All Rights Reserved.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Get to Know Us</h3>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">News & Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">How To Shop</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Orders & Returns</h3>
          <ul className="space-y-2">
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Return & Exchange</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Selling Tips</a></li>
            <li><a href="#">Payment</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2"><Phone size={20} /><span>(702) 555-0122</span></li>
            <li className="flex items-center space-x-2"><Mail size={20} /><span>electro@example.com</span></li>
            <li className="flex items-center space-x-2"><MapPin size={20} /><span>4517 Washington Ave., Manchester, Kentucky 495</span></li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-200 text-center py-4">
        <ul className="flex justify-center space-x-6">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Shipping Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;