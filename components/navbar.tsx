import Image from 'next/image';
import logo from '../public/assets/logo.svg';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="flex justify-between">
      <div className="flex items-center">
        <div className="flex items-center">
          <Image src={logo} width={30} height={30} alt="Helping Horse Ry" />
          <h4 className="text-left text-lg pl-4">
            <b>H</b>elping <b>H</b>orse Ry
          </h4>
        </div>
        <div className="pl-4" style={{ paddingTop: '0.2rem' }}>
          <Link href="/about" className="pl-4">
            {t('header.about')}
          </Link>
          <Link href="/rules" className="pl-4">
            {t('header.rules')}
          </Link>
        </div>
      </div>
      <div style={{ paddingTop: '0.2rem' }}>LANG</div>
    </nav>
  );
};

export default Navbar;
