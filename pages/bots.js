import Link from 'next/link';

import PageLayout from '../components/PageLayout';

const Magazine = () => {
    return (
        <div className='h-full pt-12 w-4/5 self-center grid grid-rows-6 grid-cols-6 gap-1'>
                <div className='min-w-64 max-w-104 h-auto row-end-2 col-start-1 flex flex-col items-center'>
                    <Link href='tangerinebankbot'>
                        <img className='h-auto w-full object-cover cursor-pointer' src='/MrPeel.gif'></img>
                    </Link>
                    <h3 className='-mt-6'>Peely, Tangerine Telecom</h3>
                </div>
                <div className='min-w-40 max-w-56 h-auto row-end-1 xsm:col-start-4 md:col-start-3 flex flex-col items-center'>
                    <Link href='commbankbot'>
                        <img className='h-auto w-full object-cover cursor-pointer' src='/CBALogo.svg'></img>
                    </Link>
                    <h3 className='mt-8'>Ceba, CommBank</h3>
                </div>
                <div className='min-w-40 max-w-56 h-auto xsm:row-start-5 md:row-end-4 xsm:col-start-4 md:col-start-5 flex flex-col items-center'>
                    <Link href='bankmontrealbot'>
                        <img className='h-auto w-full object-cover cursor-pointer' src='/BMOLogo.svg'></img>
                    </Link>
                    <h3 className='mt-8'>BMO Bolt™</h3>
                </div>
        </div>
    );
};

Magazine.getLayout = page => <PageLayout>{page}</PageLayout>;

export default Magazine;