const PageLayout = ({ children }) => {
    return(
      <main>
        <div className='h-screen grid auto-cols auto-rows'>
          <div>
              <h1 className='text-4xl tracking-widest leading-loose'>CYNTHIA CHOU</h1>
          </div>
          {children}
        </div>
      </main>
    )
  };
  
  export default PageLayout;
  