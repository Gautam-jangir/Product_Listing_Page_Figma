import search from "../assets/icons/search.png"
import bag from "../assets/icons/bag.png"

function Navbar() {
  return (
    <div className="flex justify-between items-center text-white mx-8 py-16">
      <div className="flex justify-center items-center">
        <img className="w-12 h-12" src="/logo.png" alt="FloraVision" />
        <span className="pl-4 font-(family-name:--font-inter) text-3xl  font-black tracking-normal opacity-75">
          FloraVision.
        </span>
      </div>
      <div className="font-(family-name:--font-indie)">
        <ul className="list-none flex font-normal non-italic text-2xl tracking-normal">
          <li className="mx-12">
            <a href="#">Home</a>
          </li>
          <li className="mx-12">
            <a className=" flex justify-center items-center" href="#">
              Plants Type
              <div
                className="ml-6 w-0 h-0
               border-l-(length:--dropdown-caret) border-l-transparent
               border-r-(length:--dropdown-caret) border-r-transparent
               border-t-(length:--dropdown-caret) border-t-white"
              ></div>
            </a>
          </li>
          <li className="mx-12">
            <a href="#">More</a>
          </li>
          <li className="mx-12">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <img className="w-(--icon-size) mr-16" src={search} alt="search" />
        <img className="w-(--icon-size) mr-16" src={bag} alt="bag" />
        <div className="">
          <div className="w-(--menu-icon-top-width) border-2 rounded-sm"></div>
          <div className="w-(--menu-icon-bottom-width) border-2 rounded-sm mt-2"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;