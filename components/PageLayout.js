import Link from 'next/link'

import Layout from './Layout';
import Nav from './Nav';

//solving this layout with grid-areas?
const PageLayout = ({ children }) => {
    return (
     <Layout>
        <div className='flex flex-row'>
          <div className='relative grid auto-cols-2 grid-rows-2'>
            <div className='min-w-64'>
                <h1 className='p-5 text-2xl tracking-widest leading-loose'>
                  <Link href='/'>CYNTHIA CHOU</Link>
                </h1>
            </div>
            <div className='pt-8 col-start-2'>
              <Nav />
            </div>
          </div>
          {children}
        </div>
      </Layout>
    );
  };
  
export default PageLayout;