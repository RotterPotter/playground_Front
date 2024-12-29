import React, { useRef, useEffect } from 'react';
import { use } from 'react';

export default function DateSelector({ date, setDate, isDateSelectorOpen, setIsDateSelectorOpen }) {
  const dateSelectorRef = useRef(null);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const today = new Date();
  const [selectedDate, setSelectedDate] = React.useState(date);
  const monthName = monthNames[selectedDate.getMonth()];
  const fullYear = selectedDate.getFullYear();

  function addMonths(date, months) {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  }

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  const handleDateSelectorClick = (day) => {
    setSelectedDate(new Date(fullYear, selectedDate.getMonth(), day));
    setIsDateSelectorOpen(false);
  };

  useEffect(() => {
    setDate(selectedDate);
  }, [selectedDate]);

  // Close the date selector if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dateSelectorRef.current && !dateSelectorRef.current.contains(event.target)) {
        setIsDateSelectorOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsDateSelectorOpen]);

  return (
    <div
      ref={dateSelectorRef} // Attach the ref to the container
      className={`absolute w-[400px] bg-white shadow-xl z-50 p-2 rounded-xl text-sm flex flex-col justify-start items-center border
      ${isDateSelectorOpen ? 'block' : 'hidden'}`}
    >
      <div className='flex flex-row justify-center items-center gap-3 p-1'>
        <button
          onClick={() => setSelectedDate(addMonths(selectedDate, -1))}
          className='p-1 px-2 rounded-full border font-semibold text-gray-500 active:shadow-none active:bg-white hover:bg-gray-100/50'
        >
          {'<'}
        </button>
        <div className='flex flex-col justify-start items-center w-[100px]'>
          <p className='font-semibold'>{monthName}</p>
          <p className='text-gray-500 font-semibold'>{fullYear}</p>
        </div>
        <button
          onClick={() => setSelectedDate(addMonths(selectedDate, 1))}
          className='p-1 px-2 rounded-full border font-semibold text-gray-500 active:shadow-none active:bg-white hover:bg-gray-100/50'
        >
          {'>'}
        </button>
      </div>
      <div className='w-[90%] h-[0.1px] bg-black/20'></div>
      <div className='flex flex-wrap justify-start gap-2 p-5'>
        {range(1, getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth())).map((day) => (
          <button
            onClick={() => handleDateSelectorClick(day)}
            key={day}
            className={`relative w-[40px] h-[40px] flex justify-center items-center rounded-full border font-semibold text-gray-500 active:shadow-none active:bg-white hover:bg-gray-100/50
            ${day === selectedDate.getDate() && date.getMonth() === selectedDate.getMonth() ? 'border-gray-700 border-2' : ''}`}
          >
            {day}
            {day === today.getDate() && selectedDate.getMonth() === today.getMonth() && (
              <div className='absolute bottom-1 w-[5px] h-[5px] bg-gray-700 rounded-full'></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
