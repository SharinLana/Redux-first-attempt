import cart from './cart.png';
import './Cart.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../redux/cartSlice';



const Cart = () => {
    const cartItems = useSelector(getCartItems);


    return (
        <div>
            <img className='Cart-icon' src={ cart } alt='cart-pic'/>
            {cartItems.map((cartItem )=> <CartItem cartItem={cartItem}/>)}
        </div>
    )
}

export default Cart;