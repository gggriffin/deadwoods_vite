import { Link } from "react-router-dom";

type NavButtonProps = {
    link: string;
    title: string;
}

export const NavButton = (props: NavButtonProps) => {
  const { link, title } = props;
  return (
    <Link to={link}>
      <button className='rounded text-sm text-bold py-3 px-5 hover:bg-blue-primary hover:text-white min-w-min'>
        {title}
      </button>
    </Link>
  );
};
