import StoreCard from "./StoreCard"
import { DollarSign, ShoppingCart, User, RotateCcw } from "lucide-react";

const StoreAnalytics = () => {
    const data = [
      { icon: DollarSign, title: "Total Sales", value: "$6,650.05", change: 10, today: 150, bgcolor:'#E8F9FF', color: "#578FCA", status:"#72BF78",  },
      { icon: ShoppingCart, title: "Total Orders", value: "1,212,321", change: -4, today: 2990, bgcolor:'#C9E9D2', color: "#789DBC", status: "#E50046" },
      { icon: User, title: "Visitor", value: "820,100", change: 8, today: 120, bgcolor:'#FFCCE1', color: "#E195AB", status:"#72BF78" },
      { icon: RotateCcw, title: "Refunded", value: "21,980", change: -4, today: 31, bgcolor:'#B3C8CF', color: "#4b7684", status: "#E50046" },
    ];
  
    return (
      <div className="flex flex-wrap gap-4 justify-between mb-5">
        {data.map((item, index) => (
          <StoreCard key={index} {...item} />
        ))}
      </div>
    );
  };
  
  export default StoreAnalytics;