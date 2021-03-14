import React, { useContext, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import router from 'next/router';

import { Main } from '@/styles/components/main';
import DealOfTheDay from '@/components/DealOfTheDay';
import Content from '@/components/Content';
import Button from '@/components/Button';
import { ContainerButton, Select } from '@/styles/components/content';

import api from '@/services/api';
import { OptionsProps, SizeProps, SizeType } from '@/@types';
import { OrderContext } from '@/contexts/OrderContext';
import { toast } from 'react-toastify';

const Size: React.FC<SizeProps> = ({ data }) => {
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState({} as OptionsProps);
  const [recomendedSize, setRecomendedSize] = useState({} as SizeType);
  const { setSelectedSizeToOrder } = useContext(OrderContext);

  useEffect(() => {
    const optionsSelect = data.map((item: SizeType) => {
      if (item.recommendation) {
        setRecomendedSize(item);
      }
      return {
        value: item.title,
        label: item.title,
        size: item,
      };
    });
    setSizes(optionsSelect);
  }, [data]);

  const handleOnchange = (size: OptionsProps) => {
    setSelectedSize(size);
    if (size.value === recomendedSize.title) {
      toast.success('Você receberá pontos de benefícios');
    }
  };

  const handleSubmit = () => {
    if (selectedSize.value) {
      setSelectedSizeToOrder(selectedSize.size);
      router.push('/filling');
    } else {
      toast.error('É necessário escolher um tamanho para avançar');
    }
  };

  return (
    <>
      <Main>
        <DealOfTheDay />
        <Content
          title="Selecione um tamanho"
          imageUrl="/assets/pizza_sizes.webp"
        >
          <Select
            id="size"
            options={sizes}
            placeholder="Selecione um tamanho"
            onChange={(size: OptionsProps) => handleOnchange(size)}
          />
          <ContainerButton>
            <Button onClick={handleSubmit} />
          </ContainerButton>
        </Content>
      </Main>
    </>
  );
};

export default Size;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('/sizes');
  const { data } = res;

  return {
    props: {
      data,
    },
  };
};
