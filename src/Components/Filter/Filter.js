import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, getSelectedCategory } from '../../redux/dishesSlice';

import './Filter.css';


const Filter = ( {category} ) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    
    return (
        <div>
            <p onClick={() => dispatch(filterCategory(category))}
            className={selectedCategory === category ? 'categoryButtonSelected categoryBtn' : 'categoryButton categoryBtn'}>{category}</p>
        </div>
    )
}

export default Filter;