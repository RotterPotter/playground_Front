import React, { useState, useEffect } from "react";
import UpdateSVG from "./assets/UpdateSVG";
import DateSelector from "./DateSelector";
import { add, set } from "date-fns";
import LoadingUI from "./LoadingUI";
import AppointmentCard from "./AppointmentCard";

export default function Schedule() {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState(new Date());
  const [barbersAppointments, setBarbersAppointments] = useState({});
  const [isDateSelectorOpen, setIsDateSelectorOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const takeAppointments = async () => {
    setIsLoading(true);

    // Delay for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (date === null) {
      setDate(new Date());
    }

    const formattedDate = add(date, { hours: 1 }).toISOString(); // Converts to ISO 8601 format
    try {
      const response = await fetch(
        `https://tuscanyai.it/api/appointments/?date=${formattedDate}`
      );
      const data = await response.json();
      setAppointments(data);

      // Transform appointments into barbersAppointments structure
      const updatedBarbersAppointments = {};
      for (const appointment of data) {
        if (!updatedBarbersAppointments[appointment.barber_id]) {
          updatedBarbersAppointments[appointment.barber_id] = [];
        }
        updatedBarbersAppointments[appointment.barber_id].push(appointment);
      }

      // Update the state properly
      setBarbersAppointments(updatedBarbersAppointments);
      console.log("Updated barbersAppointments:", updatedBarbersAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
    setIsLoading(false);
  };

  // Trigger `takeAppointments` when the button is clicked
  const updateClick = () => {
    takeAppointments(); // Call the function on click
  };

  // Fetch appointments initially when the component mounts
  useEffect(() => {
    takeAppointments();
    console.log("Date", date);
  }, [date]);

  useEffect(() => {
    if (!date) {
      setDate(new Date());
    }
    console.log("Date", date);
  }, []);

  return (
    <div className="relative w-[800px] border bg-white  border-black/80 rounded-3xl shadow-black shadow-inner z-50">
      {isLoading && <LoadingUI></LoadingUI>}
      <div className="flex justify-between items-center p-5">
        <div>
          <p className="text-2xl font-semibold">Agenda</p>
          <button
            onClick={() => setIsDateSelectorOpen(!isDateSelectorOpen)}
            className=" relative border rounded-xl p-1 px-2 text-sm font-semibold text-black/80 border-black/80"
          >
            {date && date.toLocaleDateString()}
          </button>
          <DateSelector
            date={date}
            setDate={setDate}
            isDateSelectorOpen={isDateSelectorOpen}
            setIsDateSelectorOpen={setIsDateSelectorOpen}
          ></DateSelector>
        </div>
        <button
          onClick={updateClick} // Attach the click event
          className="border border-black hover:-translate-y-[2px]  active:-translate-y-0  text-white font-semibold px-5 py-2 rounded-2xl"
        >
          <UpdateSVG />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[90%] h-[0.5px] bg-black/50"></div>
        <div className="w-[90%] h-[0.5px] bg-black/50"></div>
        <div className="w-[90%] h-[0.5px] bg-black/50"></div>
        <div className="w-[90%] h-[0.5px] bg-black/50"></div>
        <div className="w-[90%] h-[0.5px] bg-black/50"></div>
        <div className="flex flex-row w-full items-start px-6">
          <div className="flex justify-center items-center text-white w-[50px] h-[20px]">
            00:00
          </div>
          <div className=" flex w-full h-full justify-between items-start px-3">
            <div className=" w-1/4 p-0 m-0">
              <div className=" w-full p-0 m-0 flex justify-center items-start font-medium">
                Alex
              </div>
            </div>
            <div className=" w-1/4 p-0 m-0">
              <div className=" w-full p-0 m-0 flex justify-center items-start font-medium">
                Luca
              </div>
            </div>
            <div className=" w-1/4 p-0 m-0">
              <div className=" w-full p-0 m-0 flex justify-center items-start font-medium">
                Gioelle
              </div>
            </div>
            <div className=" w-1/4 p-0 m-0">
              <div className=" w-full p-0 m-0 flex justify-center items-start font-medium">
                Chris
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-[500px] overflow-auto overflow-y-auto custom-scrollbar items-start px-5 pb-5">
          <div className="w-[50px] flex-col justify-center items-center border-r-2 border-black/50">
            {[
              "9:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00",
              "16:00",
              "17:00",
              "18:00",
              "19:00",
            ].map((time, index) => (
              <div
                key={index}
                className="h-[60px] flex justify-center pr-3 items-start font-medium"
              >
                {time}
              </div>
            ))}
          </div>
          <div className=" flex w-full h-full justify-between items-start pr-3">
            {/* First Column */}
            <div
              className={`relative w-1/4 h-[600px] border-r p-0 m-0
              ${isLoading ? "opacity-0" : "opacity-100"}`}
            >
              {barbersAppointments["1"] &&
                barbersAppointments["1"].map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    className={"bg-red-400"}
                  ></AppointmentCard>
                ))}
            </div>
            <div
              className={`relative w-1/4 h-[600px] border-r p-0 m-0
              ${isLoading ? "opacity-0" : "opacity-100"}`}
            >
              {barbersAppointments["2"] &&
                barbersAppointments["2"].map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    className={"bg-blue-400"}
                  ></AppointmentCard>
                ))}
            </div>
            <div
              className={`relative w-1/4 h-[600px] border-r p-0 m-0
              ${isLoading ? "opacity-0" : "opacity-100"}`}
            >
              {barbersAppointments["3"] &&
                barbersAppointments["3"].map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    className={"bg-green-400"}
                  ></AppointmentCard>
                ))}
            </div>
            <div
              className={`relative w-1/4 h-[600px] border-r p-0 m-0
              ${isLoading ? "opacity-0" : "opacity-100"}`}
            >
              {barbersAppointments["4"] &&
                barbersAppointments["4"].map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    className={"bg-purple-400"}
                  ></AppointmentCard>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
