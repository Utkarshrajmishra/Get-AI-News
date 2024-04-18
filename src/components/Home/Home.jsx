import React from 'react';

const Home = () => {
  return (
    <>
      <section className="h-[100%] flex justify-center items-center mt-9">
        <div>
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-8xl text-center mt-[-190px]">
              Get
              <span className="text-green-600"> AI</span>
              <br />
              News Every
              <span className="text-green-600"> Day </span>
            </h1>
            <h2 className="relative font-regular text-sm sm:text-xl text-[#a7b2b3] tracking-wide   max-w-2xl antialiased mt-5 text-center">
              Your One-Stop Destination for Latest AI Buzz
            </h2>
          </div>
          <div class="mouse"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
