import { LanguageContext } from '@/App';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { MdOutlineGTranslate } from 'react-icons/md';

export const MainLayout = () => {
  const { toggleIsTranslated } = useContext(LanguageContext);

  return (
    <>
      <div className="flex justify-end p-2 ">
        <button onClick={() => toggleIsTranslated()}>
          <MdOutlineGTranslate className="size-7" />
        </button>
      </div>
      <Outlet />
    </>
  );
};
