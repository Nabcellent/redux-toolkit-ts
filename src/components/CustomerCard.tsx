import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addFood} from '../features/customer/customerSlice';

interface CustomerCartTypes {
    id: string;
    name: string;
    food: string[];
}

const CustomerCard = ({id, name, food}: CustomerCartTypes) => {
    const dispatch = useDispatch();
    const [foodValue, setFoodValue] = useState("");

    const handleAddFood = () => {
        if(!foodValue) return;

        dispatch(addFood({id, food: foodValue}))

        setFoodValue("")
    }

    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {food.map((food, i) => <p key={i}>{food}</p>)}
                </div>
                <div className="customer-food-input-container">
                    <input value={foodValue} onChange={e => setFoodValue(e.target.value)}/>
                    <button onClick={handleAddFood}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerCard;
