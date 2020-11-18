import PageLayout from '../components/PageLayout';
import Container from '../components/Container';

const resourceImgs = [
    'Plate1',
    'Plate2',
    'Plate3',
]

const EveryPlate = () => {
    return (
        <div className='h-full md:max-w-2/3 md:pt-4 w-4/5 self-center flex flex-col md:pl-2'>
            <div className='pb-10'>
                <h1 className='font-bold px-6'>EveryPlate</h1>
            </div>
            <Container title='Objective'>
                <p className='px-6'>
                EveryPlate is the smaller sister company of HelloFresh, and while they operate on the same values of fresh, 
                quality ingredients “delivered at a delightful price”, EveryPlate caters towards a slightly younger demographic 
                with a more direct, honest, and cheeky voice.               
                </p>
            </Container>
            <Container withBorder={true} title='Role'>
                <p className='px-6'>
                As the only UX writer in the company, I’m a “shared resource” with EveryPlate and try to implement the same UX writing best 
                practices and principles as HelloFresh to their product.             
                </p>
            </Container>
            <Container>
                <div className='w-100 h-auto flex flex-row content-between overflow-x-scroll'>
                    {
                     resourceImgs.map((x) => {
                         return (
                            <div className='min-w-64 max-w-104 h-auto p-2 flex justify-center'>
                                <img src={`/EveryPlate/${x}.svg`} />
                            </div>
                         )
                     })
                    }
                </div>
            </Container>
        </div>
    );
};

EveryPlate.getLayout = page => <PageLayout>{page}</PageLayout>;

export default EveryPlate;