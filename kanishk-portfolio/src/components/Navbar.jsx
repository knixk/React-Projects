import { links } from '../data';

const Navbar = () => {
  return (
    <nav className='bg-purple-400 px-8 '>
      <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items sm:py-8'>
        <h2 className='text-3xl font-bold'>
          Kanishk's<span className='text-purple-700 px-2'>portfolio</span>
        </h2>   
        <div className='flex gap-x-3 text-black font-bold'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;