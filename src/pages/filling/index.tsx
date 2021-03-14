import React, { useContext, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

import OrderModal from '@/components/OrderModal';
import { Main } from '@/styles/components/main';
import DealOfTheDay from '@/components/DealOfTheDay';
import Content from '@/components/Content';
import { ContainerButton, Select } from '@/styles/components/content';
import Button from '@/components/Button';

import { FillingProps, FillingType, OptionsProps } from '@/@types';
import { OrderContext } from '@/contexts/OrderContext';
import api from '@/services/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Filling: React.FC<FillingProps> = ({ data }) => {
  const [fillings, setfillings] = useState([]);
  const [selectedFilling, setSelectedFilling] = useState({} as OptionsProps);
  const [recomendedFilling, setRecomendedFilling] = useState({} as FillingType);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedFillingToOrder } = useContext(OrderContext);
  const router = useRouter();

  useEffect(() => {
    const optionsSelect = data.map((item: FillingType) => {
      if (item.recommendation) {
        setRecomendedFilling(item);
      }
      return {
        value: item.title,
        label: item.title,
        filling: item,
      };
    });
    setfillings(optionsSelect);
  }, [data]);

  const handleOnchange = (filling: OptionsProps) => {
    setSelectedFilling(filling);
    if (filling.value === recomendedFilling.title) {
      toast.success('Você receberá pontos de benefícios');
    }
  };

  const handleSubmit = async () => {
    if (selectedFilling.value) {
      setSelectedFillingToOrder(selectedFilling.filling);
      setIsModalOpen(true);
    } else {
      toast.error('É necessário escolher um recheio para avançar');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push('/');
  };

  return (
    <>
      {isModalOpen && <OrderModal closeModal={handleCloseModal} />}
      <Main>
        <DealOfTheDay />
        <Content
          title="Selecione um recheio"
          imageUrl="/assets/pizza_fillings.webp"
        >
          <Select
            id="filling"
            options={fillings}
            placeholder="Selecione un recheio"
            onChange={(filling: OptionsProps) => handleOnchange(filling)}
          />
          <ContainerButton>
            <Button onClick={handleSubmit}>Finalizar</Button>
          </ContainerButton>
        </Content>
      </Main>
    </>
  );
};

export default Filling;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('/fillings');
  const { data } = res;

  return {
    props: {
      data,
    },
  };
};
