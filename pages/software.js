import Link from 'next/link';

import PageLayout from '../components/PageLayout';

const Magazine = () => {
    return (
        <div className='group1 h-full max-w-3/4 pt-12 w-4/5 self-center grid grid-rows-3 grid-cols-6 gap-5'>
            <div className='min-w-40 max-w-56 h-auto row-start-1 col-start-4 flex flex-col items-center'>
                <Link href='hellofresh'>
                    <img className='h-auto w-full object-cover cursor-pointer' src='/HelloLogo.svg'></img>
                </Link>
                <h3 className='mt-8 group1-hover:text-secondary group-hover:underline'>HelloFresh</h3>
            </div>
            <div className='min-w-40 max-w-56 h-auto row-start-2 col-start-2 flex flex-col items-center'>
                <a href='https://docs.google.com/presentation/d/1K2jpwOJACHQUQtZJIk_vHibYztMBr-uaVAT93Mt_7-w/edit' target='_blank'>
                    <img className='h-auto w-full object-cover cursor-pointer' src='/BunchLogo.svg'></img>
                </a>
                <h3 className='mt-8'>Bunch AI</h3>
            </div>
            <div className='min-w-40 max-w-56 h-auto row-start-3 col-start-5 flex flex-col items-center'>
                <Link href='everyplate'>
                    <img className='h-auto w-full object-cover cursor-pointer' src='/EveryPlateLogo.svg'></img>
                </Link>
                <h3 className='mt-8'>EveryPlate</h3>
            </div>
        </div>
    );
};

Magazine.getLayout = page => <PageLayout>{page}</PageLayout>;

export default Magazine;