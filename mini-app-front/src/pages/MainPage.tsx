import { LanguageContext } from '@/App';
import { MainItemSign } from '@/components/MainItemSign';
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

  return (
    <>
      {window.Telegram && window.Telegram.WebApp.BackButton.hide()}
      <section className="flex gap-5 justify-center flex-wrap">
        {zodiacs &&
          Object.keys(zodiacs.horoscope).map((elem, index) => {
            return <MainItemSign key={elem} signName={elem} score={index} />;
          })}
      </section>
    </>
  );
};
