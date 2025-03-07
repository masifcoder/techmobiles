import { useEffect, useState } from "react";
import StoreCard from "./StoreCard"
import { DollarSign, ShoppingCart, User, RotateCcw } from "lucide-react";
import axios from "axios"
import {useSelector} from "react-redux"

const StoreAnalytics = () => {
    const [totalSales, setTotalSales] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0); 
    const token = useSelector(state => state.authSlice.token)


    const data = [
      { icon: DollarSign, title: "Total Sales", value: `$${totalSales}`, change: 10, today: 150, bgcolor:'#E8F9FF', color: "#578FCA", status:"#72BF78",  },
      { icon: ShoppingCart, title: "Total Orders", value: totalOrders, change: -4, today: 2990, bgcolor:'#C9E9D2', color: "#789DBC", status: "#E50046" },
      { icon: User, title: "Visitor", value: "820,100", change: 8, today: 120, bgcolor:'#FFCCE1', color: "#E195AB", status:"#72BF78" },
      { icon: RotateCcw, title: "Refunded", value: "21,980", change: -4, today: 31, bgcolor:'#B3C8CF', color: "#4b7684", status: "#E50046" },
    ];

    useEffect( () => {
      const fetchCardData = async () => {
        try {
             const response = await axios.get("http://localhost:3000/api/admin/totalCards", {
              headers: {
                "Authorization": `Bearer ${token}`
              }
             });
             console.log(response.data);
             setTotalOrders(response.data.totalOrders);
             setTotalSales(response.data.totalRevenue);
        } catch (error) {
          
        }
      }

      fetchCardData();
    }, []);
  
    return (
      <div className="flex flex-wrap gap-4 justify-between mb-5">
        {data.map((item, index) => (
          <StoreCard key={index} {...item} />
        ))}
      </div>
    );
  };
  
  export default StoreAnalytics;