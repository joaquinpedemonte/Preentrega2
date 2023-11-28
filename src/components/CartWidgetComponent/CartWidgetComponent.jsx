import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
    const iconStyle = {
        fontSize:'1.3rem',
        paddingRight:'10px',
    }
    
    
    return(
        <div>
            <FontAwesomeIcon icon={faCartShopping} size="lg" style={iconStyle}/>
            <span style={{fontSize:'1.3rem'}}>10</span>
        </div>
    )
}

export default CartWidgetComponent;