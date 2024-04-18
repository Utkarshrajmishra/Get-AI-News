import React from 'react';
import { ColorRing } from 'react-loader-spinner';
const NewsArea = ({ props }) => {
  return (
    <>
      <section className=" mt-8 flex justify-center ">
        <section className="outline outline-1 outline-white py-5 px-5 w-[90%] min-h-[350px] rounded-xl mb-3 ">
          <section className="flex justify-center">
            <ColorRing
              visible={props.loader}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#22c55e', '#22c55e', '#22c55e', '#22c55e', '#22c55e']}
            />
          </section>
          <section className="">
            <p
              className="text-white text-sans"
              dangerouslySetInnerHTML={{ __html:props.text }}
            />
          </section>
          {console.log(props.text)}
        </section>
      </section>
    </>
  );
};

export default NewsArea;
