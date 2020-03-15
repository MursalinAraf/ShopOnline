import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Rating } from 'semantic-ui-react'
import PropTypes from 'prop-types'

 /* eslint-disable no-nested-ternary */
const productCard = props => (
  <Card>
    <Card.Content>
      <Link to={`/produit/${props.product.id}`}>
        <Image src={props.product.path} />
      </Link>
      <Card.Content>
        <Card.Header>
          <Link to={`/produit/${props.product.id}`}>
            <h1>{props.product.name}</h1>
          </Link>
        </Card.Header>
      </Card.Content>
      <Card.Meta>{props.product.price} €</Card.Meta>
      <Rating defaultRating={props.product.rating} maxRating={5} disabled />
      <Card.Description>
        <b>{props.product.category} : </b>
        <br />
        Product Description
        <Card.Content extra>
          {props.product.quantity === 1
            ? '1 Product Available'
            : props.product.quantity !== 0
              ? `in Stock(${props.product.quantity} number products)`
              : 'Out of stock'}
        </Card.Content>
      </Card.Description>
    </Card.Content>
  </Card>
)

productCard.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired
}

export default productCard
