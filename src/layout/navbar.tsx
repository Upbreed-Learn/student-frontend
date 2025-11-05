import { Input } from '@/components/ui/input';
import logo from '../assets/upbreed-logo.svg';
import {
  ChevronDown,
  CircleQuestionMark,
  Headset,
  Info,
  LogOutIcon,
  Menu,
  Search,
  Settings,
  ShieldAlert,
} from 'lucide-react';
import { Link, NavLink } from 'react-router';
import AvatarCustom from '@/components/ui/custom/avatar';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import CashOutline from '@/assets/jsx-icons/cash-outline';

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-[#001C0C]">
      <div className="flex w-full max-w-7xl items-center justify-between px-18 pt-7 pb-5 text-white">
        <Link to="/">
          <img src={logo} alt="upbreed logo" />
        </Link>
        <div className="flex items-center gap-1">
          <p className="text-sm/[100%] font-semibold">Classes</p>
          <ChevronDown />
        </div>
        <div className="flex items-center gap-3">
          <CircleQuestionMark />
          <div className="relative">
            <Input
              placeholder="Search"
              type="search"
              className="w-[16.775rem] rounded-[2.75rem] bg-white pl-11 text-xs/[100%] font-medium text-black placeholder:text-[#C8C8C8]"
            />
            <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-[#001A72]" />
          </div>
        </div>
        <div className="flex items-center gap-9">
          <NavLink
            to="/1-on-1"
            className={({ isActive }) =>
              cn(
                isActive &&
                  'relative before:absolute before:-bottom-6.25 before:h-1 before:w-full before:bg-[#D0EA50]',
              )
            }
          >
            1 - on - 1
          </NavLink>
          <NavLink
            to="/my-courses"
            className={({ isActive }) =>
              cn(
                isActive &&
                  'relative before:absolute before:-bottom-6.25 before:h-1 before:w-full before:bg-[#D0EA50]',
              )
            }
          >
            My Courses
          </NavLink>
        </div>
        <div className="flex items-center gap-7">
          <MenuDropdown>
            <Menu />
          </MenuDropdown>
          <AvatarCustom src={''} alt="Avatar" fallback="JO" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const MenuDropdown = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer p-1">
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex min-w-35.75 flex-col items-end gap-2 border-none bg-[#305B43] px-3.5 py-5 text-white">
        <DropdownMenuItem asChild>
          <Link
            to="/about"
            className="group flex w-full cursor-pointer items-center justify-end gap-3"
          >
            About
            <Info className="text-white group-hover:text-black" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            to="/pricing"
            className="group flex w-full cursor-pointer items-center justify-end gap-3"
          >
            Pricing
            <CashOutline className="group-hover:hidden" />
            <CashOutline stroke="black" className="hidden group-hover:block" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            to="/privacy"
            className="group flex w-full cursor-pointer items-center justify-end gap-3"
          >
            Privacy
            <ShieldAlert className="text-white group-hover:text-black" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            to="/settings"
            className="group flex w-full cursor-pointer items-center justify-end gap-3"
          >
            Settings
            <Settings className="text-white group-hover:text-black" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            to="/help-centre"
            className="group flex w-full cursor-pointer items-center justify-end gap-3"
          >
            Help centre
            <Headset className="text-white group-hover:text-black" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button className="group flex w-full cursor-pointer items-center justify-end gap-3">
            Logout
            <LogOutIcon className="rotate-180 text-white group-hover:text-black" />
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
