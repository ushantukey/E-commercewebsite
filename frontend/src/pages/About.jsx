import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/Newsletter'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-6 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At JustShop, we believe that shopping should be simple, fun, and affordable. Founded with the vision of bringing the best of fashion, lifestyle, and daily essentials to your fingertips, JustShop has quickly grown into a trusted online destination for shoppers across India.</p>
            <b className='text-gray-800'>Our mission</b>
            <p>Our mission is to make quality products accessible to everyone. Whether you’re searching for trendy apparel, stylish accessories, or reliable everyday items, JustShop is here to deliver the best – at prices you’ll love.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At JustShop, quality is our top priority. Every product listed on our platform goes through a strict selection process to ensure that it meets our high standards of durability, comfort, and style.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shopping should be easy, stress-free, and enjoyable — and that’s exactly what JustShop delivers. We’ve designed our platform with simplicity and speed in mind, so you can focus on what you love: finding the right products at the right price.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At JustShop, we believe that great products mean little without great service. That’s why we go above and beyond to ensure every customer feels valued, heard, and supported.</p>
        </div>
        
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
