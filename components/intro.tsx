import { CMS_NAME } from '../lib/constants';
import { useTranslation } from 'next-i18next';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        Helping Horse Ry
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A passionate equestrian hobby club and {CMS_NAME} and {t('header.blog')}.
      </h4>
    </section>
  );
};

export default Intro;
