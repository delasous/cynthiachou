import Link from 'next/link';

import PageLayout from '../components/PageLayout';

const Magazine = () => {
    return (
        <div className='h-full max-w-3/4 pt-12 w-4/5 self-center grid grid-rows-3 grid-cols-6 gap-5'>
            <div className='min-w-40 max-w-56 h-auto row-start-1 col-start-4'>
                <Link href='hellofresh'>
                    <img className='h-auto w-full object-cover' src='/HelloLogo.svg'></img>
                </Link>
            </div>
            <div className='min-w-40 max-w-56 h-auto row-start-2 col-start-2'>
                <a href='https://docs.google.com/presentation/d/1K2jpwOJACHQUQtZJIk_vHibYztMBr-uaVAT93Mt_7-w/edit'>
                    <img className='h-auto w-full object-cover' src='/BunchLogo.svg'></img>
                </a>
            </div>
        </div>
    );
};

Magazine.getLayout = page => <PageLayout>{page}</PageLayout>;

export default Magazine;