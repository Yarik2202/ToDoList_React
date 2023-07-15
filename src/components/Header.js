import classes from './Header.module.css';

import CurrentDate from "./CurrentDate";
import ButtonAdd from "./ButtonAdd";
function Header() {

   
   return (
    <div className={classes.header_element_position}>
        <div>
            <CurrentDate />
        </div>
        <div>
            <div className={classes.header_title}>TO DO LIST</div>
        </div>
        <div>
            <ButtonAdd />
        </div>
    </div>
   );

}

export default Header;