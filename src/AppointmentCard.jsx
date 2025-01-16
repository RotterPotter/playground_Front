import React from "react";
import { useState } from "react";

export default function AppointmentCard({ appointment, className }) {
  const [isOpen, setIsOpen] = useState(false);

  function calculatePaddingPixels(appointment_time_start) {
      // Parse the appointment time (HH:mm)
      const [hours, minutes] = appointment_time_start.split(":").map(Number);
    
      // Convert appointment time to minutes since midnight
      const appointmentMinutes = hours * 60 + minutes;
    
      // Opening time (9:00) in minutes since midnight
      const openingTimeMinutes = 9 * 60;
    
      // Difference in minutes
      const differenceMinutes = appointmentMinutes - openingTimeMinutes;
    
      // Convert to pixels
      const pixels = differenceMinutes * 1;
    
      return pixels;
    }

  return (
    <div className="relative">
      <button
        key={appointment.id}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          top: `${calculatePaddingPixels(appointment.appointment_time_start)}px`,
        }}
        className={`${className} absolute bg-black/60 rounded-xl h-[30px] w-full flex justify-center items-center border border-white group`}
      >
        <p className="hidden sm:block text-sm font-semibold text-white px-2">
          {appointment.appointment_time_start} -{" "}
          {appointment.appointment_time_end}
        </p>
        <p className="sm:hidden text-xs font-semibold text-white ">
          {appointment.appointment_time_start}
        </p>
        <span className="absolute top-full z-50 mb-2 hidden group-hover:block bg-gray-600 text-white text-xs rounded-lg py-1 px-2 ">
          {appointment.client_name}
          {appointment.phone_number}
        </span>
      </button>
    </div>
  );}