import { LanguageContext } from '@/App';
import { SignItemPage } from '@/components/SignItemPage';
import { Sign } from '@/constants/interfaces';
import { useContext, useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

export const SignPage = () => {
  const { isTranlated } = useContext(LanguageContext);
  const [zodiac, setZodiac] = useState<Sign>();
  const params = useParams();
  const getHoroscope = async () => {
    const data = await fetch('https://poker247tech.ru/get_horoscope/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        sign: `${params.sign?.split('_')[0]}`,
        language: isTranlated ? 'translated' : 'original',
        period: 'today',
      }),
    });
    data.json().then((data) => {
      setZodiac(data);
    });
  };

  useEffect(() => {
    getHoroscope();
  }, [isTranlated]);

  return (
    <>
      <Link to="/mini-app-horoscope" className="pl-5">
        <FaArrowLeft className="size-7" />
      </Link>
      <SignItemPage
        score={+params.sign!.split('_')[1]}
        description={`${zodiac?.horoscope}`}
        signName={`${params.sign?.split('_')[0]}`}
      />
    </>
  );
};
