import React from 'react';
import './cart.css'

const Cart = (props) => {
    const cart = props.cart;

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const player = cart[i];
    //     total = total + player.salary;
    // }

    const totalSalary = cart.reduce((total, player) => total + player.salary, 0)

    return (
        <div className="team-11">
            <h5>
                Galaxy 11 Team
            </h5>
            <h5>Player Added: {cart.length}</h5>
            <h5>Total Salary: ${totalSalary}</h5>
        </div> 
    );
};

export default Cart;