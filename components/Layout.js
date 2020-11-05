import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
          <Head>
            <title>Cynthia's Portfolio</title>
            <link rel="icon" href="/rubycon.jpg" />
          </Head>
          <main>
              {children}
          </main>
        </>
    );
};

export default Layout;