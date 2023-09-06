import React, {Fragment} from "react";
import classes from '../Layout/Header.module.css';
import foodImg from '../../assets/meals.jpg';


const Header = () =>{
    return(
        <Fragment>
            <header className={classes.header}>
                MealsMELA
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={foodImg} alt="Delicious Foods"/>
            </div>
        </Fragment>
    )
}

export default Header;

