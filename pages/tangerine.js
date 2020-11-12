import PageLayout from '../components/PageLayout';

const tangerine = () => {
    return (
        <div className='h-full max-w-3/4 pt-8 w-4/5 self-center flex flex-col  md:pl-2'>
                <h1 className='text-2xl'>Commonwealth Bank of Australia: CEBA</h1>
                <p className='text-sm'>Talk to CEBA here:</p>
                <div className='border-solid border-4 border-black p-3 -ml-3'>
                    <h1 className='text-2xl'>Objective</h1>
                    <p className='text-sm'>The Commonwealth Bank of Australia</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Role</h1>
                    <p className='text-sm'>Lead (and sole) Content Strategist.</p>
                </div>
                <div className='border-solid border-4 border-black p-3 -ml-3'>
                    <h1 className='text-2xl'>Outcomes</h1>
                    <p className='text-sm'>CEBA the bot is able to answer 35 topics around</p>
                </div>
        </div>
    );
};

tangerine.getLayout = page => <PageLayout>{page}</PageLayout>;

export default tangerine;