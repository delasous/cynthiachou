import PageLayout from '../components/PageLayout';
import Container from '../components/Container';

const resourceImgs = [
    'Bolt1',
    'Bolt2',
    'Bolt3',
    'Bolt4',
]

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
                The innovation department at the Bank of Montreal—one of Canada’s Big Five 
                banks—approached our team at Finn AI with a bot pilot project, as part of their bid to stay 
                competitive in the growing world of fintech. For phase 1 of the project, we aimed to handle 25 of customers’ 
                most-asked topics, including billing, fees, transfers, ATM / branch locations, account types, credit cards, and exchange rates.
                </p>
            </Container>
            <Container title='Role'>
                <p className='px-6'>
                I was the Content Strategist for this project, meeting with BMO’s innovation team in Toronto for a kick-off workshop, 
                and training their copywriters on UX writing best practices.
                </p>
            </Container>
            <Container withBorder={true} title='Outcomes'>                    
                <p className='px-6'>
                I was the Content Strategist for this project, meeting with BMO’s innovation team in Toronto for a kick-off workshop, 
                and training their copywriters on UX writing best practices.
                </p>
            </Container>
            <Container>
                <div className='w-100 h-auto flex flex-row content-between overflow-x-scroll'>
                    {
                     resourceImgs.map((x) => {
                         return (
                            <div className='min-w-64 max-w-104 h-auto p-2'>
                                <img src={`/BankMontreal/${x}.svg`} />
                            </div>
                         )
                     })
                    }
                </div>
            </Container>
        </div>
    );
};

MontrealBank.getLayout = page => <PageLayout>{page}</PageLayout>;

export default MontrealBank;