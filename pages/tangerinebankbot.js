import PageLayout from '../components/PageLayout';
import Container from '../components/Container';

const resourceImgs = [
    'Peely1',
    'Peely2',
    'Peely3',
    'Peely4'
]

const TangerineBank = () => {
    return (
        <div className='h-full md:max-w-2/3 md:pt-4 w-4/5 self-center flex flex-col md:pl-2'>
            <div className='pb-10'>
                <h1 className='font-bold px-6'>Tangerine Telecom: Peely</h1>
                <a href='https://vue.comm100.com/chatWindow.aspx?siteId=40000167&planId=b0a3c69d-4599-4506-aaa4-1e194db08830#' className='hover:text-secondary underline'>
                    <h3 className='px-6'>Talk to Peely here</h3>
                </a>
            </div>
            <Container withBorder={true} title='Objective'>
                <p className='px-6'>
                Tangerine Telecom is a relatively new Australian broadband provider known for their exceptional service and bright orange mascot, Peely. 
                As their customer base was quickly surpassing 10,000, they approached Comm100 for a chatbot solution that would help scale their customer support operations and handle the most basic FAQs to start.
                </p>
            </Container>
            <Container title='Role'>
                <p className='px-6'>
                As Comm100’s first chatbot specialist, I brought my experience and knowledge of conversational UX to onboard and guide the Tangerine team through the bot creation process. 
                This spanned from the design of the bot’s onboarding experience and info architecture of the bot’s responses, to the voice and tone of the bot in different user contexts.
                </p>
            </Container>
            <Container withBorder={true} title='Outcomes'>                    
                <p className='px-6'>
                Peely received an average in-chat rating of 4.2/5 star within the first 3 months of his launch, with many positive comments about his relatable Australian persona and the conversational nature of his responses.
                </p>
            </Container>
            <Container>
                <div className='w-100 h-auto flex flex-row content-between overflow-x-scroll'>
                    {
                     resourceImgs.map((x) => {
                         return (
                            <div className='min-w-64 max-w-104 h-auto p-2'>
                                <img src={`/Tangerine/${x}.svg`} />
                            </div>
                         )
                     })
                    }
                </div>
            </Container>
            <Container title='Process'>                    
                <h3 className='px-6'>User Research</h3>
                    <p className='px-6 pb-3'>
                        We gathered call logs from Tangerine's Customer Care team to answer the following questions:
                    </p>
                    <ul className='px-6 pb-3 list-disc mx-6'>
                        <li>
                            What types of topcis are users really querying for?
                        </li>
                        <li>
                            How do users format their questions in a typical conversation?
                        </li>
                        <li>
                            What follow-up questions or requests do users pose after their initial intent is resolved?
                        </li>
                        <li>
                            How do call center agents responde to each type of question, both in content and in tone?
                        </li>
                    </ul>
                    <p className='px-6 pb-3'>
                        Tangerine's website FAQs page also served as a secondary source of data for the types and frequency of user questions
                        that we could expect the bot to receive.
                    </p>
                <h3 className='px-6'>Content Design</h3>
                    <ul className='px-6 pb-3 mx-6 list-disc'>
                        <li>
                            Tangerine provided an initial draft of bot responses from a business and technical perspective; I then edited them for
                            clarity, brevity, consistency of voice, tone, and connecting responses into a conversational flow with quick-reply buttons.
                        </li>
                        <li>
                            After 4 iterations, we deployed our first version of bot content 🎉
                        </li>
                    </ul>
            </Container>
        </div>
    );
};

TangerineBank.getLayout = page => <PageLayout>{page}</PageLayout>;

export default TangerineBank;