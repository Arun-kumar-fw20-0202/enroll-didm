import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";

export default function SelectTag({
  arr = [],
  onChange,
  value,
  placeholder = "Select message type",  
}) {
  return (
    <div className="w-full min-w-[100px]">
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-sm bg-white py-2 pl-3 pr-10 text-left border border-gray-500 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
            <span className="block truncate text-[12px]">
              {value ? value?.name : placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BiChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options className="absolute border border-gray-500 z-20 mt-1 max-h-48 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {arr.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none text-[12px] border-gray-400 border-b py-2 pl-10 pr-4 ${
                      active
                        ? "bg-gray-100 text-gray-900 boder border-gray-300 transition-all duration-300"
                        : "text-gray-900 transition-all boder border-gray-300 duration-300"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-400">
                          <AiOutlineCheck
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}