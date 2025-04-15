import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const AllProduct = () => {

    const { products, searchQuery } = useAppContext();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
        if(searchQuery.length > 0){
            setFilteredProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))}
        else{
            setFilteredProducts(products);
        }
    }, [products, searchQuery])

  return (
    <div className='mt-16 flex-col'>
      <div className='flex flex-col items-end w-max'>
        <p className='text-2xl uppercase font-medium'>All Products</p>
        <div className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>

      <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6 mt-6 gap-3'>
        {filteredProducts.filter((product)=> product.inStock).map((product, index)=>(
            <ProductCard key={index} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default AllProduct
