import PageLayout from '../components/PageLayout';
import Container from '../components/Container';

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
                The Commonwealth Bank of Australia needed an interactive tool to educate and 
                facilitate the use of their new South African “Money Transfer” system.
                </p>
            </Container>
            <Container title='Role'>
                <p className='px-6'>
                Lead (and sole) Content Strategist. Analyze source content, categorize key topics and keywords, 
                write and edit all language in the bot.
                </p>
            </Container>
            <Container withBorder={true} title='Outcomes'>                    
                <p className='px-6'>
                Ceba the bot is able to answer 35 intents around CBA’s Money Transfer program with around 89% accuracy, 
                and recognize a further 50 different keywords for a combined total of around 250 questions. 
                Users can also send and receive transfers, check their balance, or add money to their account directly through the bot. 
                The bot was rolled out to 6.2 million CBA app users.
                </p>
            </Container>
            <Container title='Process'>                    
                <h3 className='px-6'>User Research</h3>
                    <p className='px-6 pb-3'>
                    I requested call logs from the Customer Care team at CBA to determine what types of intents are most commonly-asked, 
                    how users format their questions in a conversation, what follow-up questions they pose, and how call center agents respond. 
                    This gives us a real-life model for the creation of CEBA, both in the structuring of her responses and her voice / tone patterns.
                    FAQs found on CBA’s website served as a secondary source of data for the types and frequency of user questions, but not for voice / tone.
                    </p>
                <h3 className='px-6'>Content Design</h3>
                    <p className='px-6 pb-3'>

                    </p>
                <h3 className='px-6'>Prototyping</h3>
                    <p className='px-6 pb-3'>
                    Botmock
                    Tagging content with engineering types
                    and intent-entity names  
                    </p>
            </Container>
        </div>
    );
};

CommBank.getLayout = page => <PageLayout>{page}</PageLayout>;

export default CommBank;