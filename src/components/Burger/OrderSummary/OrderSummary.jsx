import { Component } from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OrderSummary.jsx] componentWillUpdate');
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map((igKey, i) => {
      return (
        <li key={igKey + i}>
          <span style={{textTransform: 'capitalize'}}>{igKey}: { this.props.ingredients[igKey]}</span>
        </li>
      )
    });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: { this.props.price.toFixed(2) }</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
 }
}

export default OrderSummary;