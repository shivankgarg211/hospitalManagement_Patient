import Link from "next/link";

function Layout({ children }) {
  return (
    <div className="w-full z-10">
      <div className="fixed top-0 left-0 right-0 z-10 bg-emerald-600 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="flex flex-row justify-between p-5 text-white md:px-32 px-5">
          <div className="flex flex-row items-center cursor-pointer">
            <Link href="/">
              <h1 className="text-2xl font-semibold">health care</h1>
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-5">
            <Link href="/" className="bg-emerald-600 hover:underline hover:underline-offset-4 hover:text-black">
              Home
            </Link>
            <Link href="/about" className="bg-emerald-600 hover:underline hover:underline-offset-4 hover:text-black">
              About
            </Link>
            <Link href="/service" className="bg-emerald-600 p-1 px-1 hover:underline hover:underline-offset-4 hover:text-black">
              Service
            </Link>
            <Link href="/contact" className="bg-emerald-600 p-1 px-1 hover:underline hover:underline-offset-4 hover:text-black">
              Contact
            </Link>
            <Link href="/emergency" className="bg-emerald-600 p-1 px-1 hover:underline hover:underline-offset-4 hover:text-black">
              Emergency
            </Link>
            <Link href="/achivement" className="bg-emerald-600 p-1 px-1 hover:underline hover:underline-offset-4 hover:text-black">
              Achievement
            </Link>
            <Link href="/media" className="bg-emerald-600 p-1 px-1 hover:underline hover:underline-offset-4 hover:text-black">
              Media
            </Link>
            <Link href="/career" className="bg-emerald-600 p-1 px-1 hover:underline hover:underline-offset-4 hover:text-black">
              Career
            </Link>
          </nav>
          <div>
            <Link href="/appointment" className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition duration-300 ease-in-out">
              Appointment
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-24"> {/* Adjust this padding to match the height of the fixed navbar */}
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;