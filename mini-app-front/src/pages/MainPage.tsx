import { LanguageContext } from '@/App';
import { FetchResponse } from '@/constants/interfaces';
import { useContext, useEffect, useState } from 'react';

export const MainPage = () => {
  const [zodiacs, setZodiacs] = useState<FetchResponse>();
  const { isTranlated } = useContext(LanguageContext);

  const getHoroscopes = async () => {
    const data = await fetch('https://poker247tech.ru/get_horoscope/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        sign: '',
        language: isTranlated ? 'translated' : 'original',
        period: 'today',
      }),
    });
    data.json().then((data) => {
      setZodiacs(data);
    });
  };

  useEffect(() => {
    getHoroscopes();
  }, [isTranlated]);

  return <p>Знаки зодиака: {JSON.stringify(zodiacs)}</p>;
};
