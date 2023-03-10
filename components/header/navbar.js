// renderd in every page as navbar


// necessary dependencies
import Link from "next/link"
import Image from 'next/image'
import { useState } from "react"
import { Transition } from "@headlessui/react"
import { useRef } from "react"

// the component
const Navbar = ({ props, path }) => {
  // ref of the navbar
  const divRef = useRef(null)

  // responsive navbar toggle
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='sticky top-0 z-50'>
      <nav className="bg-gradient-to-r from-blue-900 to-cyan-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex cursor-pointer">
                  <Image
                    src="/logo/logo.png"
                    alt="RCSC"
                    width={48}
                    height={48}
                  />
                  <p className="text-xl lg:text-2xl block px-3 py-2 rounded-md font-medium">AquaRover</p>
                </div>
              </Link>
              <div className="hidden lg:block">
                <div className="px-4 flex items-center">
                  {Object.keys(props).map(i => (
                    path != i
                      ?
                      <Navbutton name={props[i]['name']} link={i} key={i} />
                      :
                      <Navbutton name={props[i]['name']} link={i} key={i} classname="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium" />
                  ))}
                </div>
              </div>
            </div>

            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <div className="indicator">
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </div>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="lg:hidden bg-gray-800" id="mobile-menu">
              <div ref={divRef} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {Object.keys(props).map(i => (
                  path != i
                    ?
                    <Navbutton name={props[i]['name']} link={i} key={i} />
                    :
                    <Navbutton name={props[i]['name']} link={i} key={i} classname="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium" />
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

const Navbutton = (props) => {
  return (
    <div>
      <Link legacyBehavior href={props.link}>
        <a
          href="#"
          className={`text-gray-400 hover:bg-gray-700 ${props.classname} block px-4 mx-3 py-2 rounded-md text-base transition duration-150 ease-in-out`}
        >
          {props.name}
        </a>
      </Link>
    </div>
  )
}

export default Navbar


// structure
 // -> Desktop -> Logo > RCSC > All Navbuttons > Profile Image

 // Mobile -> Logo > RCSC > Profile Image > Navbar Toggle Button
// -> gives all the Nav buttons in the bottom when clicked