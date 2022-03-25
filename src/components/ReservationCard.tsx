import React from 'react';
import {useDispatch} from 'react-redux';
import {removeReservation} from '../features/reservations/reservationsSlice';
import {addCustomer} from '../features/customer/customerSlice';
import {v4 as uuid} from 'uuid';

interface ReservationCardTypes {
    name: string;
    index: number;
}

const ReservationCard = ({name, index}: ReservationCardTypes) => {
    const dispatch = useDispatch();

    return <div onClick={() => {
        dispatch(removeReservation(index));
        dispatch(addCustomer({
            id: uuid(), name, food: []
        }));
    }} className="reservation-card-container">{name}</div>;
};

export default ReservationCard;
