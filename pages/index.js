import Link from 'next/link';

import Layout from '../components/Layout';

const Home = () => {
  return (
    <div className='h-screen grid xsm:grid-cols-1 xsm:grid-rows-1 md:grid-cols-2'>
      <div className='pl-5 flex flex-col flex-wrap xsm:z-10 xsm:h-screen md:max-w-3/4 md:col-start-1 md:col-span-1 md:self-center md:justify-self-center'>
        <div className='mb-5 mr-auto w-full'>
          <h1 className='text-4xl tracking-widest leading-loose xsm:text-white'>
            Hi, I'm Cynthia.
          </h1>
        </div>
        <div className='max-w-72 mr-auto'>
        <h1 className='text-4xl tracking-widest leading-loose xsm:text-white'>
          I write for <Link href='bots'><a>bots</a></Link>, <Link href='software'><a>software</a></Link>, and <Link href='magazines'><a>magazines</a></Link>.
          </h1>
        </div>
        <div className='mt-16 pr-5 ml-auto xsm:mt-auto grid grid-rows-4 auto-cols-max xsm:col-end-3 row-end-4 justify-self-end xsm:text-white'>
          <h2 className='row-start-1 col-end-4'>
            <a href='https://www.linkedin.com/in/cynthia-chou/' target='_blank'>
              LinkedIn
            </a>
          </h2>
          <h2 className='row-start-2 col-end-3'>
            <a href='https://medium.com/@cynthiachouu' target='_blank'>
              Medium
            </a>
          </h2>
          <h2 className='row-start-3 col-end-2'>
            <a href='cynthia.chou@live.com' target='_blank'>
              Email
            </a>
          </h2>
          <h2 className='row-start-4 col-end-1'>
            <a href='https://www.instagram.com/c__yn__th__ia/' target='_blank'>
              Instagram
            </a>
          </h2>
        </div>
      </div>
      <div className='h-screen w-100 xsm:col-start-1 md:col-start-2 md:col-span-1'>
        <img className='h-full w-full object-cover' src='/profile.svg'></img>
      </div>
    </div>
  );
};

Home.getLayout = page => <Layout>{page}</Layout>;

export default Home;