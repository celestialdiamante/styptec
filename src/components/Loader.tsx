import React from "react";

const Loader = () => {
  return (
    <section className="fixed top-0 left-0 h-screen w-full bg-gray-700 bg-opacity-70 flex items-center justify-center z-50">
      <div
        className="w-16 h-16 border-8 text-primary text-4xl animate-spin
       border-gray-300 border-t-primary rounded-full"
      />
    </section>
  );
};

export default Loader;
