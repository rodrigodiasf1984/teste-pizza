import React, { useContext, useEffect, useState } from 'react';

import { Overlay, Container } from '@/styles/components/orderModal';
import { ModalProps } from '@/@types';
import { OrderContext } from '@/contexts/OrderContext';
import api from '@/services/api';

const OrderModal: React.FC<ModalProps> = ({ closeModal }) => {
  const { order } = useContext(OrderContext);
  const { dought, size, filling } = order;
  const [points, setPoints] = useState(0);
  useEffect(() => {
    const getPoints = async () => {
      const res = await api.get('/points');
      setPoints(res.data.pointsQt);
    };
    if (
      dought?.recommendation ||
      size?.recommendation ||
      filling?.recommendation
    ) {
      getPoints();
    }
  }, [dought?.recommendation, filling?.recommendation, size?.recommendation]);

  return (
    <Overlay>
      <Container>
        <header>Pedido 1</header>
        <strong>Concluído</strong>
        {points > 0 ? (
          <p>
            Você ganhou {points} ponto(s) por ter escolhido a recomendação do
            dia.
          </p>
        ) : (
          <p>Obrigado pelo seu pedido, volte sempre.</p>
        )}
        <button type="button" onClick={closeModal}>
          <img src="assets/icons/close.svg" alt="Fechar modal" />
        </button>
      </Container>
    </Overlay>
  );
};

export default OrderModal;
