import Link from 'next/link';

import Layout from '../components/Layout';

const Home = () => {
  return (
    <div className='h-screen grid xsm:grid-cols-1 xsm:grid-rows-1 md:grid-cols-2'>
      <div className='pl-5 grid xsm:grid-cols-2 auto-rows-xsm xsm:z-10 xsm:h-screen md:max-w-3/4 md:col-start-1 md:col-span-1 md:self-center md:justify-self-center'>
        <h1 className='mb-5 col-start-1 text-4xl tracking-widest leading-loose xsm:text-white'>
          Hi, I'm Cynthia.
        </h1>
        <h1 className='col-start-1 text-4xl tracking-widest leading-loose xsm:text-white'>
          I write for <Link href='bots'>bots</Link>, <Link href='software'>software</Link>, and <Link href='magazines'>magazines.</Link>
          </h1>
        <div className='mt-16 pr-5 grid grid-rows-4 auto-cols-max xsm:col-end-3 row-start-4 justify-self-end xsm:text-white'>
          <h2 className='row-start-1 col-end-4'>LinkedIn</h2>
          <h2 className='row-start-2 col-end-3'>Medium</h2>
          <h2 className='row-start-3 col-end-2'>Email</h2>
          <h2 className='row-start-4 col-end-1'>Instagram</h2>
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