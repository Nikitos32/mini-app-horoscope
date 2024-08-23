import { LanguageContext } from '@/App';
import { Icons } from '@/constants/icons';
import { library } from '@/constants/library';
import { useContext } from 'react';
import { IconType } from 'react-icons';

interface SignItemPageProps {
  description: string;
  signName: string;
  score: number;
}

export const SignItemPage = ({
  description,
  signName,
  score,
}: SignItemPageProps) => {
  const SignIcon: IconType = Icons[score];
  const { isTranlated } = useContext(LanguageContext);
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
