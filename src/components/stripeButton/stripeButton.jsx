import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
 
  // ...
  
 
  render() {
    const {price} = this.props;
    return (
      // ...
      <StripeCheckout
        amount={price*100}
        panelLabel="pay now"
        description= {`Your total doller is : $${price}`}
        billingAddress
        shippingAddress
        name="SHOP CART"
        image="static/media/logo.3400d2cb.png"
        token={this.onToken}
        stripeKey="pk_test_51IQtguAHLmdJ2E3uqyEzeBj4W2ALEDvPhLHBDWwzeUcIMEOF00qTwpNWzC0MGIFtWKF4Ac8T2JTLAmJXYdMlj0J000IJW0zCmJ"
      />
    )
  }
}