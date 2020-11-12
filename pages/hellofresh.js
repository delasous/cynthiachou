import PageLayout from '../components/PageLayout';
import Container from '../components/Container';

const HelloFresh = () => {
    return (
        <div className='h-full md:max-w-2/3 md:pt-4 w-4/5 self-center flex flex-col md:pl-2'>
            <div className='pb-10'>
                <h1 className='font-bold px-6'>HelloFresh</h1>
            </div>
            <Container withBorder={true} title='Objective'>
                <p className='px-6'>
                HelloFresh is a global, Berlin-based company, and the largest meal-kit provider in the US. 
                While the product was performing well with a UX team of ~10 designers and less than 10 researchers, 
                the language within the digital platform had no owner making sure that it was consistent, engaging, and clear.                
                </p>
            </Container>
            <Container title='Role'>
                <p className='px-6'>
                As the first UX Writer to join the company of ±250, I introduced and applied language best practices to the digital product, 
                and refined the practice of the UX writing wtihin the org.                
                </p>
            </Container>
            <Container withBorder={true} title='Outcomes'>                    
                <p className='px-6 pb-3'>
                Created company-wide UX Writing Guidelines, UX Writing workflows, and a product-wide glossary for establishing consistency in our language and terminology. 
                Also documented best pracitces when it comes to tone, messaging, and UX considerations for different segments of the user journey—from onboarding to cancellations.
                </p>
                <p className='px-6'>
                Scalable elements of the guidelines and product glossary have also been built into an automated Sketch assistant tool, allowing product designers to easily implement writing best practices into their practice.                
                </p>
            </Container>
            <Container title='Process'>                    
                <h3 className='px-6'>User Research</h3>
                    <p className='px-6 pb-3'>
                    Interview all Product Owners, UX Designers, and UX Researchers about: *current workflow when it comes to copy * painpoints when it comes to copy *                     
                    Chart current workflow and tools used across the UX / copy process
                    </p>
            </Container>
        </div>
    );
};

HelloFresh.getLayout = page => <PageLayout>{page}</PageLayout>;

export default HelloFresh;