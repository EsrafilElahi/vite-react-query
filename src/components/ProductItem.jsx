import React from 'react'
import styles from '../styles/productItem.module.css';
import { useNavigate } from 'react-router-dom';


const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.div} onClick={() => navigate(`/products/${product.id}`)}>
      <h2>title :{product.title}</h2>
      <h4>description :{product.description}</h4>
      <span>price :{product.price}</span>
    </div>)
}

export default ProductItem