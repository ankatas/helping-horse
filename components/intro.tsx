import { useTranslation } from 'next-i18next';
import rider from '../public/assets/horse-snow.jpg';
import Image from 'next/image';
import Button from './button';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="mt-10 p-6 rounded-xl"
        style={{ background: 'blanchedalmond' }}
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="self-center col-span-2">
            <h1 className="text-7xl tracking-tighter leading-tight md:pr-8">
              Helping Horse Ry
            </h1>
            <h4 className="text-left text-lg mt-5 mb-5">
              {t('index.tagline')}
            </h4>
            <div className="flex justify-center">
              <Button text={t('index.introButton')} onClick={() => {}}></Button>
            </div>
          </div>
          <div className="self-center" style={{marginLeft: "-7em"}}>
            <Image
              src={rider}
              width={800}
              height={800}
              alt="A passionate equestrian hobby club"
              style={{ borderRadius: '50%' }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
