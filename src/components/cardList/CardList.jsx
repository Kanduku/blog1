import React from 'react'
import styles from "./cardlist.module.css";


import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

const CardList = () => {
  return (
    <div className={styles.container}>
          
          <h4 className={styles.title}>Recent posts</h4>
     <div className={styles.post}>
      <Card />
      <Card />
      <Card />
      <Card />
     </div>

   
    
   <Pagination />

    </div>
  )
}

export default CardList
