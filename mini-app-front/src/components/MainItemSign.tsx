import { LanguageContext } from '@/App';
import { Icons } from '@/constants/icons';
import { library } from '@/constants/library';
import { useContext } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface SignItemPageProps {
  signName: string;
  score: number;
}

export const MainItemSign = ({ signName, score }: SignItemPageProps) => {
  const SignIcon: IconType = Icons[score];
  const { isTranlated } = useContext(LanguageContext);
  return (
    <Link
      to={`./${signName}_${score}`}
      className="flex flex-col gap-5 text-justify border border-black w-80 p-2 rounded-lg hover:shadow-[1px_1px_5px] transition-all duration-500"
    >
      <p className="flex justify-center">
        <SignIcon className="size-20" />
      </p>
      <p className="flex justify-center font-semibold">
        {isTranlated
          ? signName.toUpperCase()
          : library.get(signName)?.toUpperCase()}
      </p>
      <p className="flex justify-center pb-1">
        {new Date().toLocaleDateString()}
      </p>
    </Link>
  );
};
