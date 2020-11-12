import PageLayout from '../components/PageLayout';

const Magazine = () => {
    return (
        <div className='h-full max-w-3/4 pt-12 w-4/5 self-center grid grid-rows-6 grid-cols-9 gap-5'>
                <div className='min-w-64 max-w-112 h-auto row-start-1 col-start-2 col-span-5'>
                    <a href='https://www.frankandoak.com/handbook/culture/best-tokyo-record-stores' target='_blank'>
                        <img className='h-auto w-full object-cover hover:shadow-xl' src='/TheHandbookPreview.svg'></img>
                    </a>
                </div>
                <div className='min-w-64 max-w-104 h-auto row-start-2 col-start-6 col-span-4'>
                    <a href='http://fatboyzine.com/' target='_blank'>
                        <img className='h-auto w-full object-cover hover:shadow-xl' src='/HypebeastPreview.svg'></img>
                    </a>
                </div>
                <div className='min-w-64 max-w-112 h-autp row-start-4 col-start-1 col-span-5'>
                    <a href='http://fatboyzine.com/' target='_blank'>
                        <img className='h-auto w-full object-cover hover:shadow-xl' src='/FatBoyPreview.svg'></img>
                    </a>
                </div>
        </div>
    );
};

Magazine.getLayout = page => <PageLayout>{page}</PageLayout>;

export default Magazine;