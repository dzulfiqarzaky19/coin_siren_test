import { ChevronDown } from 'lucide-react';
import { Typography } from '../atoms/Typography';
import { NAV_ITEMS } from '@/constants/navigation';

export const HeaderDesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-10">
      {NAV_ITEMS.map((item) => (
        <div key={item.label} className="relative group cursor-pointer">
          <div className="flex items-center gap-1 font-bold">
            <Typography variant="body2" weight="bold">
              {item.label}
            </Typography>
            {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
          </div>

          {item.hasDropdown && item.items && (
            <div className="absolute top-full left-0 mt-2 w-[240px] bg-white rounded-lg shadow-xl text-gray-800 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Typography as="h4" variant="caption" weight="bold" className="mb-3 text-gray-900">
                {item.label}
              </Typography>
              <ul className="space-y-3 text-gray-600">
                {item.items.map((subItem) => (
                  <Typography
                    key={subItem}
                    as="li"
                    variant="caption"
                    className="cursor-pointer hover:text-blue-600 font-medium">
                    {subItem}
                  </Typography>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
