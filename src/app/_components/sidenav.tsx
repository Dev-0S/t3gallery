'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Upload', path: '/avatar/upload' },
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed left-0 h-[calc(100vh-4rem)] w-64 bg-transparent text-white p-4 top-16">
      <div className="space-y-6">
       
        
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  pathname === item.path
                    ? 'bg-slate-950 text-white'
                    : 'hover:bg-gray-700'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 