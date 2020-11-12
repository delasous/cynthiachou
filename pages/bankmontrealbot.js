import PageLayout from '../components/PageLayout';

import Container from '../components/Container';

const MontrealBank = () => {
    return (
        <div className='h-full md:max-w-2/3 md:pt-4 w-4/5 self-center flex flex-col md:pl-2'>
            <div className='pb-10'>
                <h1 className='font-bold px-6'>The Bank of Monreal: Bolt</h1>
                <a href=' https://www.bmo.com/main/personal/chatbot/' target='_blank'>
                    <h3 className='px-6'>Talk to Bolt here</h3>
                </a>
            </div>
            <Container withBorder={true} title='Objective'>
                <p className='px-6'>
                </p>
            </Container>
            <Container title='Role'>
                <p className='px-6'>
                </p>
            </Container>
            <Container withBorder={true} title='Outcomes'>                    
                <p className='px-6'>
                </p>
            </Container>
            <Container title='Process'>                    
                <h3 className='px-6'>User Research</h3>
                    <p className='px-6 pb-3'>
                    </p>
                <h3 className='px-6'>Content Design</h3>
                    <p className='px-6 pb-3'>

                    </p>
                <h3 className='px-6'>Prototyping</h3>
                    <p className='px-6 pb-3'>
                    </p>
            </Container>
        </div>
    );
};

MontrealBank.getLayout = page => <PageLayout>{page}</PageLayout>;

export default MontrealBank;