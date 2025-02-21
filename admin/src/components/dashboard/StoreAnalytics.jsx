import StoreCard from "./StoreCard"
import { DollarSign, ShoppingCart, User, RotateCcw } from "lucide-react";

const StoreAnalytics = () => {
    const data = [
      { icon: DollarSign, title: "Total Sales", value: "$6,650.05", change: 10, today: 150, color: "blue" },
      { icon: ShoppingCart, title: "Total Orders", value: "1,212,321", change: -4, today: 2990, color: "blue" },
      { icon: User, title: "Visitor", value: "820,100", change: 8, today: 120, color: "orange" },
      { icon: RotateCcw, title: "Refunded", value: "21,980", change: -4, today: 31, color: "red" },
    ];
  
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {data.map((item, index) => (
          <StoreCard key={index} {...item} />
        ))}
      </div>
    );
  };
  
  export default StoreAnalytics;