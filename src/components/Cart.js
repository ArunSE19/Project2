import React from 'react'
import Dashboard2 from './Dashboard2';
import "./Cart.css"
const Cart = ({ cartItems, HandleAddProduct, HandleRemoveProduct }) => {
  const totalPrice = cartItems.reduce((price, items) => price + items.quantity * items.price, 0);
  const handle=()=>{
    console.log(cartItems);
  }
  return (
    <>
      <div>
        <div>
          <Dashboard2 />
          <div>
            <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
              <h3>Candidates</h3>
              <hr />

              <div className='cart-items'>
                <div className='cart-items-header'>Cart Items</div>

                {cartItems.Length === 0  && (
                  <div className='cart-items-empty'>No Items Added To The Cart</div>)}

                {cartItems.map((items) => (
                  <>

                <div key={items.id} className='cart-item-list'>
                    <img className='cart-items-image' id='cart-items-image' src={items.image} alt={items.name} />
                      <div className='cart-items-name' id='cart-items-name'>{items.name}</div>
                      
                      <div className='cart-items-function'>
                        {/* <button className="cart-items-add" onClick={() => HandleAddProduct(items)}>+</button> */}
                        <button className='cart-items-remove' id='cart-items-remove' onClick={() => HandleRemoveProduct(items)}>-</button>
                      </div>
                      <div className='cart-item-price' id='cart-item-price'>{items.price}</div>
                    </div>
                  </>
                ))
                }
                <div className='cart-items-total-price-name'>Total Price
                  <div className='cart-Items-total-price'>PKR.{totalPrice}</div>
                </div>
                
                <div className='cart-items-total-price-name1'>
                <button className='cart-items-remove1' id='cart-items-remove1' onClick={handle}>CheckOut</button>
                </div>
                
              </div>
              </main>
      </div>
          </div>
        
    </div >
    </>
  )
}

export default Cart
