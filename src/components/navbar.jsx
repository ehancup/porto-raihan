import { Bars2Icon } from "@heroicons/react/24/outline"

export const Navbar = () => {
  return (
    <nav className="fixed top-5 right-5 z-10">
            <button className="h-14 w-14 bg-blue-400 grid place-items-center">
                <Bars2Icon className="h-8"/>
            </button>

    </nav>
  )
}
