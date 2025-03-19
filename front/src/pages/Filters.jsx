import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'
import BrandFilter from '../components/filters/BrandFilter'
import RamFilter from '../components/filters/Ramfilter'
import PriceRangeFilter from '../components/filters/PriceRangeFilter'
import ProductsSection from '../components/ProductSection'
import SortByDropdown from '../components/filters/SortByDropdown'
import StorageFilter from '../components/filters/StorageFilter';
import { useDebounce, useWindowScroll } from "@uidotdev/usehooks";


const Filters = () => {
    const [filters, setFilters] = useState({
        minPrice: 10,
        maxPrice: 1000,
        brand: '',
        ram: [],
        storage: []
    });
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const debouncedFilters = useDebounce(filters, 500);
    const [{ x, y }, scrollTo] = useWindowScroll();

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const params = new URLSearchParams();

            if (filters.minPrice) params.append('minPrice', filters.minPrice);
            if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
            if (filters.brand) params.append('brand', filters.brand.join(","));
            if (filters.ram.length > 0) params.append('ram', filters.ram.join(','));
            if (filters.storage.length > 0) params.append('storage', filters.storage.join(','));

           

            const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/product/filters?${params.toString()}`);
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [debouncedFilters]);

    const handleFilterChange = (filterName, value) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: value
        }));
    };

    useEffect(() => {
        scrollTo(0, 0);
        console.log("useEffct")
    }, []);

    return (
        <div>
            <Navbar />

            <div className='grid grid-cols-6 gap-6 px-10 mt-10'>
                <div className='col-span-1 h-full'>
                    <div className='mb-4'>
                        <PriceRangeFilter handleFilterChange={handleFilterChange} />
                    </div>
                    <div className='mb-4'>
                        <BrandFilter handleFilterChange={handleFilterChange} />
                        {/* <BrandFilter /> */}
                    </div>
                    <div className='mb-4'>
                        <RamFilter handleFilterChange={handleFilterChange}  />
                    </div>
                    <div className='mb-4'>
                        <StorageFilter handleFilterChange={handleFilterChange} />
                    </div>
                </div>
                <div className='col-span-5 h-full p-6'>
                    <div>
                        <SortByDropdown />
                    </div>
                    <ProductsSection loading={loading} products={products} />
                </div>
            </div>
        </div>
    )
}

export default Filters