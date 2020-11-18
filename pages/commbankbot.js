import PageLayout from '../components/PageLayout';
import Container from '../components/Container';

const resourceImgs = [
    'CommBank1',
    'CommBank2',
    'CommBank3',
    'CommBank4',
    'CommBank5',
    'CommBank6',
]

const CommBank = () => {
    return (
        <div className='h-full md:max-w-2/3 md:pt-4 w-4/5 self-center flex flex-col md:pl-2'>
            <div className='pb-10'>
                <h1 className='font-bold px-6'>Commonwealth Bank of Australia: Ceba</h1>
                <a href='https://www.commbank.com.au/support/ceba.html' className='hover:text-secondary underline'>
                    <h3 className='px-6'>Talk to CEBA here</h3>
                </a>
            </div>
            <Container withBorder={true} title='Objective'>
                <p className='px-6'>
                The South African branch of the Commonwealth Bank of Australia needed an interactive tool to educate and 
                facilitate the use of their new Money Transfer™ system. They approached Finn AI to help them design a bot that could 
                effectively onboard their customers.
                </p>
            </Container>
            <Container title='Role'>
                <p className='px-6'>
                As Content Strategist on this project, I trained CBA’s copywriting team from South Africa on UX writing best practices, 
                and oversaw the editing and implementation of bot content.
                </p>
            </Container>
            <Container withBorder={true} title='Outcomes'>                    
                <p className='px-6'>
                Ceba the bot is able to clearly answer 35 intents around CBA’s Money Transfer™ and recognize a further 50 keywords, 
                for a combined total of +250 questions. The bot has now been successfully rolled out to 6.2 million CBA app users.
                <a href='https://www.finn.ai/case-study/cba/'>Read More</a>
                </p>
            </Container>
            <Container title='Process'>                    
                <p className='px-6 pb-3'>
                I requested call logs from the Customer Care team at CBA to determine what types of intents are most commonly-asked, 
                how users format their questions in a conversation, what follow-up questions they pose, and how call center agents respond. 
                This gives us a real-life model for the creation of CEBA, both in the structuring of her responses and her voice / tone patterns.
                FAQs found on CBA’s website served as a secondary source of data for the types and frequency of user questions, but not for voice / tone.
                </p>
            </Container>
            <Container>
                <div className='w-100 h-auto flex flex-row flex-wrap justify-center'>
                    {
                     resourceImgs.map((x) => {
                         return (
                            <div className='min-w-48 max-w-72 h-auto transform xsm:hover:scale-125 hover:scale-150 hover:z-10'>
                                <img src={`/CommBank/${x}.svg`} />
                            </div>
                         )
                     })
                    }
                </div>
            </Container>
        </div>
    );
};

CommBank.getLayout = page => <PageLayout>{page}</PageLayout>;

export default CommBank;