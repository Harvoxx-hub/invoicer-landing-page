import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';
import { navigationItems } from '../../../data/navigation';
import Button from '../buttons/Button';

const MobileNavigation = ({ isOpen, onClose }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 md:hidden" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="flex min-h-full items-start justify-center p-4 text-center">
              <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all mt-16">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                  <Dialog.Title className="text-lg font-semibold text-gray-900">
                    Menu
                  </Dialog.Title>
                  <button
                    type="button"
                    className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#163300]"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="px-4 py-6">
                  <div className="space-y-2">
                    {navigationItems.map((item) => {
                      if (item.type === 'link') {
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={onClose}
                            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        );
                      }

                      if (item.type === 'dropdown') {
                        return (
                          <Disclosure key={item.name} as="div">
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-medium text-gray-900 hover:bg-gray-50">
                                  <span>{item.name}</span>
                                  <ChevronDownIcon
                                    className={clsx(
                                      'h-5 w-5 transition-transform',
                                      open && 'rotate-180'
                                    )}
                                  />
                                </Disclosure.Button>

                                <Disclosure.Panel className="mt-1 space-y-1 pl-4">
                                  {item.items.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      onClick={onClose}
                                      className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                                    >
                                      <div className="flex items-center gap-2">
                                        <span>{subItem.name}</span>
                                        {subItem.badge && (
                                          <span className="inline-flex items-center rounded-full bg-[#9FE870] px-2 py-0.5 text-xs font-medium text-[#163300]">
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      {subItem.description && (
                                        <p className="text-xs text-gray-500 mt-0.5">
                                          {subItem.description}
                                        </p>
                                      )}
                                    </Link>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        );
                      }

                      return null;
                    })}
                  </div>
                </nav>

                {/* CTA Button */}
                <div className="border-t border-gray-200 px-6 py-4">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={onClose}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileNavigation;
