import React, { useContext, useEffect, useState } from 'react';
import { Main } from '@/styles/components/main';
import DealOfTheDay from '@/components/DealOfTheDay';
import Content from '@/components/Content';
import { GetServerSideProps } from 'next';
import api from '@/services/api';
import { ContainerButton, Select } from '@/styles/components/content';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { OptionsProps, DoughtsType, DoughProps } from '@/@types';
import { OrderContext } from '@/contexts/OrderContext';
import { toast } from 'react-toastify';

const Dough: React.FC<DoughProps> = ({ data }) => {
  const [pastas, setPastas] = useState([]);
  const [selectedPasta, setSelectedPasta] = useState({} as OptionsProps);
  const [recomendedPasta, setRecomendedPasta] = useState({} as DoughtsType);
  const router = useRouter();

  const { setSelectDoughtToOrder } = useContext(OrderContext);

  useEffect(() => {
    const optionsSelect = data.map((pasta: DoughtsType) => {
      if (pasta.recommendation) {
        setRecomendedPasta(pasta);
      }
      return {
        value: pasta.title,
        label: pasta.title,
        dought: pasta,
      };
    });
    setPastas(optionsSelect);
  }, [data]);

  const handleOnchange = (pasta: OptionsProps) => {
    setSelectedPasta(pasta);
    if (pasta.label === recomendedPasta.title) {
      toast.success('Você receberá pontos de benefícios');
    }
  };

  const handleSubmit = () => {
    if (selectedPasta.value) {
      setSelectDoughtToOrder(selectedPasta.dought);
      router.push('/size');
    } else {
      toast.error('É necessário escolher uma massa para avançar');
    }
  };

  return (
    <>
      <Main>
        <DealOfTheDay />
        <Content
          title="Selecione um tipo de massa"
          imageUrl="/assets/basic_pizza_dough.webp"
        >
          <Select
            id="dough"
            options={pastas}
            placeholder="Selecionar uma massa"
            onChange={(value: OptionsProps) => handleOnchange(value)}
          />
          <ContainerButton>
            <Button onClick={handleSubmit} />
          </ContainerButton>
        </Content>
      </Main>
    </>
  );
};

export default Dough;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('/pastas');
  const { data } = res;

  return {
    props: {
      data,
    },
  };
};
