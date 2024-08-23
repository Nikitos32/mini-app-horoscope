import { useEffect } from 'react';

export const MainPage = () => {
  const getHoroscopes = async () => {
    const data = await fetch('https://poker247tech.ru/get_horoscope/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        sign: '',
        language: 'translated',
        period: 'today',
      }),
    });
    data.json().then((data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    getHoroscopes();
  }, []);

  return <p>Main page</p>;
};
