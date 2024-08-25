import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to='/'>
      <div className='my-8 text-white items-left font-header-font text-left ml-2 md:ml-24 text-6xl md:text-7xl lg:text-9xl'>
        <div className='font-header-text text-blue-primary'>DEAD</div>
        <div className='font-header-text'>WOODS</div>
      </div>
    </Link>
  );
};
