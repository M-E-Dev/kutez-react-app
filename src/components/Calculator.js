// import { Movie } from '@material-ui/icons';
import React, { useState } from "react";
import {BsCalendar4} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import {AiFillInfoCircle} from 'react-icons/ai';

const Calculator = () => {
  const [type, setType] = useState("text")
  const typeHandler = () => {
    setType("date")
  }
  const handleQuantity = () => {
    
  }
  return (
    <div className="calc">
      <div className="company">The Company</div>
      <div className="shipping-time">
        Shipping Time <br /> Calculator
      </div>
      <ul className="inputs">
        <li className="input-li">
          <BsCalendar4 className="icon"/>
          <input
            placeholder="Order Date"
            className="input date"
            type={type}
            onFocus={typeHandler}
            onBlur={typeHandler}
            id="date"
          />
        </li>
        <li className="input-li">
          <IoIosArrowDown className="icon"/>
          <select className="input fabric" type="radio" placeholder="Fabric Type">
            <option value="">Fabric Type</option>
            <option value="cotton">Cotton</option>
            <option value="linen">Linen</option>
          </select>
        </li>
        <li className="input-li">
          <AiFillInfoCircle className="icon"/>
          <input
            type="number"
            className="input quantity"
            placeholder="Quantity"
            onChange={handleQuantity}
          />
        </li>
      </ul>
      <div className="button">
        <button className="calc-button">Calculate</button>
        <div className="estimated">
          Your Estimated Shipping Time is <span>26 September 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
