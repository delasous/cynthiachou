import Link from 'next/link'

import Layout from './Layout';

//solving this layout with grid-areas?
const PageLayout = ({ children }) => {
    return (
     <Layout>
        <div className='h-screen flex xsm:flex-col md:flex-row'>
          <div className='relative min-w-64 h-auto'>
            <div>
                <h1 className='p-5 text-2xl tracking-widest leading-loose'>
                  <Link href='/'><a className='hover:text-secondary'>CYNTHIA CHOU</a></Link>
                </h1>
            </div>
          </div>
          {children}
        </div>
      </Layout>
    );
  };
  
export default PageLayout;

//import Nav from './Nav';
//<div className='pt-8 col-start-2'>
//  <Nav />
//</div>