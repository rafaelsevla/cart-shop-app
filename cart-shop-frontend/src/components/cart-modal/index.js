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
    <ModalHeader toggle={toggle}>Carrinho</ModalHeader>
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
      <Row className="ml-0 mr-0">
        <p className="mr-auto ml-2 font-weight-bold text-success border-bottom">
          {totalValue !== 0 &&
            `R$ 
            ${totalValue.toFixed(2).toLocaleString('pt-BR')}`}
        </p>
        <Button
          className="action-button float-right"
          color="#8936bc"
          onClick={() => (window.location = 'https://netshoes.com.br')}
        >
          Concluir compra
        </Button>
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
