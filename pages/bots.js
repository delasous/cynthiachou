import Link from 'next/link';

import PageLayout from '../components/PageLayout';

const Magazine = () => {
    return (
        <div className='h-full pt-12 w-4/5 self-center grid grid-rows-3 grid-cols-6 gap-5'>
                <div className='min-w-64 max-w-72 h-auto row-start-2 col-start-1'>
                    <Link href='tangerine'>
                        <img className='h-auto w-full object-cover' src='/MrPeel.gif'></img>
                    </Link>
                </div>
                <div className='min-w-40 max-w-64 h-auto row-start-1 col-start-3'>
                    <Link href='cba'>
                        <img className='h-auto w-full object-cover' src='/CBALogo.svg'></img>
                    </Link>
                </div>
                <div className='min-w-40 max-w-64 h-auto row-start-3 col-start-5'>
                    <Link href='bmo'>
                        <img className='h-auto w-full object-cover' src='/BMOLogo.svg'></img>
                    </Link>
                </div>
        </div>
    );
};

Magazine.getLayout = page => <PageLayout>{page}</PageLayout>;

export default Magazine;