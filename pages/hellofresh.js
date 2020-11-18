import PageLayout from '../components/PageLayout';
import Container from '../components/Container';

const showcase = [
    'Hello4',
    'Hello5',
    'Hello6',
    'Hello7',
]

const HelloFresh = () => {
    return (
        <div className='h-full md:max-w-2/3 md:pt-4 w-4/5 self-center flex flex-col md:pl-2'>
            <div className='pb-10'>
                <h1 className='font-bold px-6'>HelloFresh</h1>
                <p className='px-6'>
                HelloFresh is a global, Berlin-based company, and the largest meal-kit provider in the US,
                with a Product Design team of ~10 designers and less than 10 researchers.             
                </p>
            </div>
            <Container withBorder={true} title='Role'>
                <p className='px-6'>
                As the first UX Writer to join the company of ±250 in March 2020, 
                I introduced and applied language best practices to the digital product, and refined the practice of the UX writing wtihin the org.               
                </p>
            </Container>
            <Container title={'Guidelines & Documentation'}>                    
                <div className='flex flex-row flex-wrap'>
                    <p className='px-6 pb-3 min-w-48 max-w-64'>
                    I created company-wide UX writing guidelines and a glossary for establishing consistency in HelloFresh’s language and terminology. 
                    I then identified the scalable elements of these guidelines (e.g. capitalization rules and date formatting standards)to be built 
                    into an automated Sketch assistant tool, allowing other future copywriters to easily stay consistent with our set of best practices.                
                    </p>
                    <div className='min-w-48 max-w-72 h-auto justify-self-center p-2 transform hover:scale-175 hover:z-10'>
                        <img src={`/HelloFresh/Hello1.svg`} />
                    </div>
                    <div className='min-w-48 max-w-104 h-auto p-2 transform hover:scale-200 hover:z-10'>
                        <img src={`/HelloFresh/Hello2.svg`} />
                    </div>
                </div>
            </Container>
            <Container title='Workflows'>                    
                <div className='flex flex-row flex-wrap'>
                    <div className='min-w-48 max-w-72 h-auto justify-self-center p-2 transform hover:scale-150 hover:z-10'>
                        <img src={`/HelloFresh/Hello3.svg`} />
                    </div>
                    <p className='px-6 pb-3 min-w-48 max-w-64'>
                    I charted the current UX writing workflow throughout the product design process by interviewing all Product Owners, UX Designers, 
                    and UX Researchers about painpoints when it comes to the creation of product copy, and how we can shorten the ‘copy feedback loop’:                    
                    </p>
                </div>
            </Container>
            <Container title='Writing Samples'>
                <div className='w-100 h-auto flex flex-row content-between overflow-x-scroll'>
                    {
                     showcase.map((x) => {
                         return (
                            <div className='min-w-48 max-w-72 h-auto p-2'>
                                <img src={`/HelloFresh/${x}.svg`} />
                            </div>
                         )
                     })
                    }
                </div>
            </Container>
        </div>
    );
};

HelloFresh.getLayout = page => <PageLayout>{page}</PageLayout>;

export default HelloFresh;