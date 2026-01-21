import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';
import { navigationItems } from '../../../data/navigation';

const DesktopNavigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navigationItems.map((item) => {
        if (item.type === 'link') {
          return (
            <Link
              key={item.name}
              to={item.href}
              className="text-white hover:text-[#9FE870] transition-colors font-medium"
            >
              {item.name}
            </Link>
          );
        }

        if (item.type === 'dropdown') {
          return (
            <Menu as="div" className="relative" key={item.name}>
              {({ open }) => (
                <>
                  <Menu.Button
                    className={clsx(
                      'flex items-center gap-1 text-white hover:text-[#9FE870] transition-colors font-medium',
                      open && 'text-[#9FE870]'
                    )}
                  >
                    {item.name}
                    <ChevronDownIcon
                      className={clsx(
                        'h-5 w-5 transition-transform',
                        open && 'rotate-180'
                      )}
                    />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-72 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      <div className="py-2">
                        {item.items.map((subItem) => (
                          <Menu.Item key={subItem.name}>
                            {({ active }) => (
                              <Link
                                to={subItem.href}
                                className={clsx(
                                  'block px-4 py-3 transition-colors',
                                  active && 'bg-gray-50'
                                )}
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <span className="font-semibold text-gray-900">
                                        {subItem.name}
                                      </span>
                                      {subItem.badge && (
                                        <span className="inline-flex items-center rounded-full bg-[#9FE870] px-2 py-0.5 text-xs font-medium text-[#163300]">
                                          {subItem.badge}
                                        </span>
                                      )}
                                    </div>
                                    {subItem.description && (
                                      <p className="text-sm text-gray-500 mt-0.5">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          );
        }

        return null;
      })}
    </nav>
  );
};

export default DesktopNavigation;
