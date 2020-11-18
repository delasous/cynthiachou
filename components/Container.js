const Container = ({ title, withBorder, children }) => {
    const border = withBorder ? `border-solid border-4 border-black py-10 px-3 -ml-3 mb-10` : `pb-10`;
    return (
        <div className={border}>
            {title && <h2 className='pb-3 px-6'>{title}</h2>}
            {children}
        </div>
    );
};

export default Container;