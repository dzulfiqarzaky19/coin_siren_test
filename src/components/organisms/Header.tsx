'use client'
import Image from 'next/image';
import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Typography } from '../atoms/Typography';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50 text-white">
            <div className="container relative mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center">
                    <Image src="/logo-header.svg" alt="Logo" width={114} height={21} className="h-6 w-auto" />
                </div>

                <nav className="hidden md:flex items-center gap-10">
                    <div className="relative group cursor-pointer">
                        <div className="flex items-center gap-1 font-bold">
                            <span>채용</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>

                        <div className="absolute top-full left-0 mt-2 w-[240px] bg-white rounded-lg shadow-xl text-gray-800 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <Typography as="h4" variant="caption" weight="bold" className="mb-3 text-gray-900">
                                채용
                            </Typography>
                            <ul className="space-y-3 text-gray-600">
                                <Typography as="li" variant="caption" className="cursor-pointer hover:text-blue-600 font-medium">해외 개발자 원격 채용</Typography>
                                <Typography as="li" variant="caption" className="cursor-pointer hover:text-blue-600 font-medium">외국인 원격 채용 (비개발 직군)</Typography>
                                <Typography as="li" variant="caption" className="cursor-pointer hover:text-blue-600 font-medium">한국어 가능 외국인 채용</Typography>
                            </ul>
                        </div>
                    </div>

                    <Typography as="div" variant="body2" weight="bold" className="cursor-pointer">
                        해외 개발자 활용 서비스
                    </Typography>
                </nav>

                <button className="hidden md:block bg-white text-[#4A77FF] px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                    <Typography as="span" variant="body2" weight="bold">
                        문의하기
                    </Typography>
                </button>

                <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden absolute right-4 ${!isOpen ? 'top-0' : 'top-6'} z-50`}>
                    {isOpen ? <X className="w-6 h-6 text-gray-800" /> : <Image src="/burger-icon-lines.svg" alt="Menu" width={24} height={24} className="w-6 h-6" />}
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
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="space-y-3">
                                    <Typography as="h4" variant="h3" weight="bold" className="text-gray-900 border-b pb-2 flex items-center justify-between">
                                        채용
                                    </Typography>
                                    <ul className="space-y-4 pl-2 text-gray-600">
                                        <Typography as="li" variant="body1" className="flex items-center gap-2 cursor-pointer hover:text-blue-600 font-medium">
                                            해외 개발자 원격 채용
                                        </Typography>
                                        <Typography as="li" variant="body1" className="flex items-center gap-2 cursor-pointer hover:text-blue-600 font-medium">
                                            외국인 원격 채용 (비개발 직군)
                                        </Typography>
                                        <Typography as="li" variant="body1" className="flex items-center gap-2 cursor-pointer hover:text-blue-600 font-medium">
                                            한국어 가능 외국인 채용
                                        </Typography>
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="border-b pb-2">
                                    <Typography as="div" variant="h3" weight="bold" className="cursor-pointer text-gray-900">
                                        해외 개발자 활용 서비스
                                    </Typography>
                                </motion.div>

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
            </div>
        </header>
    );
};