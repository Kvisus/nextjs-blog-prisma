import { getCurrentUser } from "@/lib/session";
import Link from "next/link";
import LogoutButton from "./LogoutButtob";

const Header = async () => {
  const user = await getCurrentUser();

  return (
    <header className="bg-blue-500 p-4">
      <nav
        className="flex justify-between
  items-center max-w-4xl mx-auto"
      >
        <Link href="/" className="text-white text-2xl font-bold">
          My Posts
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/blogs" className="text-white hover:underline">
              Blogs
            </Link>
          </li>
          {user?.name ? (
            <LogoutButton />
          ) : (
            <li>
              <Link
                href="/api/auth/signin"
                className="text-white hover:underline"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
