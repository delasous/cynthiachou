import PageLayout from '../components/PageLayout';

const Magazine = () => {
    return (
        <div className='h-screen w-4/5 self-center flex items-center justify-center'>
                <h2>Content Space</h2>
        </div>
    );
};

Magazine.getLayout = page => <PageLayout>{page}</PageLayout>;

export default Magazine;