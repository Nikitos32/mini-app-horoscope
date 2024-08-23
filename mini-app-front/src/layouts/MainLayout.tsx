import { LanguageContext } from '@/App';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { MdOutlineGTranslate } from 'react-icons/md';

export const MainLayout = () => {
  const { isTranlated, toggleIsTranslated } = useContext(LanguageContext);

  return (
    <div className="h-svh flex flex-col gap-5">
      <div className="flex justify-end ju p-4">
        <button onClick={() => toggleIsTranslated()} className="flex gap-2">
          {isTranlated ? 'EN' : 'RU'}
          <MdOutlineGTranslate className="size-7" />
        </button>
      </div>
      <Outlet />
    </div>
  );
};
