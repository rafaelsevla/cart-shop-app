import React from 'react';
import {
  Button,
  Card,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row
} from 'reactstrap';
import Header from './header';
import ProductInfo from './product-info';
import PurchaseInfo from './purchase-info';
import EmptyCart from './empty-cart';
import './style.scss';

const CartModal = ({
  addProductToCart,
  decreaseProductFromCart,
  isOpen,
  products,
  removeProductToCart,
  toggle,
  totalValue
}) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>Meu Carrinho</ModalHeader>
    <ModalBody>
      {products.cartItens.length ? (
        products.cartItens.map(product => (
          <>
            <Card key={product.id} className="mb-5">
              <Header
                product={product}
                removeProductToCart={removeProductToCart}
              />
              <ProductInfo product={product} />
              <PurchaseInfo
                addProductToCart={addProductToCart}
                decreaseProductFromCart={decreaseProductFromCart}
                product={product}
              />
            </Card>
          </>
        ))
      ) : (
        <EmptyCart />
      )}
      <Row className="ml-0 mr-0 mt-3">
        {totalValue !== 0 && (
          <Button
            className="ml-auto action-button float-right"
            color="#8936bc"
            onClick={() => (window.location = 'https://netshoes.com.br')}
          >
            Finalizar compra de R${' '}
            {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </Button>
        )}
      </Row>
    </ModalBody>
    <ModalFooter>
      <Button className="action-button" onClick={toggle}>
        Voltar para lista de produtos
      </Button>
    </ModalFooter>
  </Modal>
);

export default CartModal;
