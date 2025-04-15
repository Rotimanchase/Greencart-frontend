import React from 'react'
import { categories } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Categories = () => {

    const navigate = useNavigate();
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Categories</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>

        {categories.map((category, index) => (
            <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'
            style={{background: category.bgColor}}
            onClick={() => {
                navigate(`/products/${category.path.toLocaleLowerCase()}`);
                scrollTo(0, 0);
            }}>
                <img src={category.image} alt={category.text} className='group-hover:scale-108 transition max-w-28'/>
                <p className='text-sm font-medium'>{category.text}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
