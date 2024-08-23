import { LanguageContext } from '@/App';
import { Icons } from '@/constants/icons';
import { library } from '@/constants/library';
import { useContext } from 'react';
import { IconType } from 'react-icons';
import { TbZodiacAquarius } from 'react-icons/tb';

interface SignItemPageProps {
  description: string;
  signName: string;
}

export const SignItemPage = ({ description, signName }: SignItemPageProps) => {
  let SignIcon: IconType = TbZodiacAquarius;
  const { isTranlated } = useContext(LanguageContext);
  Icons.filter((elem) => {
    if (elem.name.toLowerCase().includes(signName)) SignIcon = elem;
  });
  return (
    <div className="flex flex-col gap-5 text-justify">
      <p className="mx-auto">
        <SignIcon className="size-20" />
      </p>
      <p className="flex justify-center font-semibold text-2xl">
        {isTranlated
          ? signName.toUpperCase()
          : library.get(signName)?.toUpperCase()}
      </p>
      <p className="w-1/2 my-auto mx-auto">{description}</p>
      <p className="flex justify-center pb-5">
        {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};
