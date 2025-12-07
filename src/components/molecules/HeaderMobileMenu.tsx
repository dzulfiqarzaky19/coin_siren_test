'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Typography } from '../atoms/Typography';
import { NAV_ITEMS } from '@/constants/navigation';

export const HeaderMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden absolute right-4 ${!isOpen ? 'top-0' : 'top-6'} z-50`}>
        {isOpen ? (
          <X className="w-6 h-6 text-gray-800" />
        ) : (
          <Image src="/burger-icon-lines.svg" alt="Menu" width={24} height={24} className="w-6 h-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-0 left-0 w-full bg-white text-gray-800 z-40 overflow-hidden flex flex-col justify-start pt-20 px-4">
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="space-y-3 pb-2 border-b-gray-100 last:border-0 border-b">
                  <Typography
                    as="div"
                    variant={item.hasDropdown ? 'h3' : 'h3'}
                    weight="bold"
                    className="text-gray-900 flex items-center justify-between cursor-pointer">
                    {item.label}
                  </Typography>
                  {item.hasDropdown && item.items && (
                    <ul className="space-y-4 pl-2 text-gray-600">
                      {item.items.map((subItem) => (
                        <Typography
                          key={subItem}
                          as="li"
                          variant="body1"
                          className="flex items-center gap-2 cursor-pointer hover:text-blue-600 font-medium">
                          {subItem}
                        </Typography>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 bg-white text-[#4A77FF] border border-[#4A77FF] px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors w-[80%]">
                <Typography as="span" variant="body1" weight="bold">
                  문의하기
                </Typography>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
