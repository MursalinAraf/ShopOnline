import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  Header,
  Message,
  Divider,
  Rating
} from 'semantic-ui-react'

const productDescription = props => (
  <Fragment>
    Price :
    <Header as="h2" color="red">
      <Header.Content>${props.product.price}</Header.Content>
    </Header>
    <Rating icon="star" rating={props.productRating} maxRating={5} disabled />
    <br />
    <Divider />
    <p>
      Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Alias doloremque quibusdam, nam omnis labore ipsam accusamus maxime
      expedita voluptatum beatae? Temporibus quasi cumque optio nisi autem
      repellendus sapiente consequuntur voluptatem.
    </p>
    <Divider />
    {props.product.quantity > 0 ? (
      <Message positive>
        <Message.Header>
            This product is still available</Message.Header>
        <p>Here stays exactly {props.product.quantity} produit(s) en stock</p>
      </Message>
    ) : (
      <Message negative>
        <Message.Header>
          Sorry, this product is no longer available
        </Message.Header>
      </Message>
    )}
  </Fragment>
)

productDescription.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  productRating: PropTypes.number.isRequired
}

export default productDescription
