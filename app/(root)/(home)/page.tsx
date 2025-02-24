import MeetingTypeList from "@/components/MeetingTypeList";
import moment from "moment";
import React from "react";

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base">
            Upcoming Meeting at 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {new Date().toLocaleTimeString([], { timeStyle: "short" })}
            </h1>
            <p className="text-lg font-medium text-sky-1">
              {moment().format("dddd, MMMM Do, YYYY")}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
