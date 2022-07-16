import dishesData from "../../data/dataDishes";
import Dish from "./Dish";
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/dishesSlice';

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            {dishesData
            .filter(dish => {
                if (selectedCategory === 'ALL') {
                    return true;
                    // an alternative: return dish; - the result will be the same
                }
                return selectedCategory === dish.category;
            })
            .map((dish, index) => <Dish dish={dish} key={index}/>)}
        </div>
    )
}

export default Dishes;