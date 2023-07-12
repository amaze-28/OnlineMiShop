import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReviews.css"

const ProductReviews = ({product}) => {
  return (
    <div className="ProductReviews">
        {product.map((item, index)=>(
            <ProductReviewCard key={item.image} name={item.name} price={item.price} image={item.image} 
            review={item.review} index={item.index} />
        ))}
    </div>
  )
}

export default ProductReviews