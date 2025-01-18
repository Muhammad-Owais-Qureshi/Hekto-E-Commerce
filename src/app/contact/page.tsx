import React from "react";
import ContactForm from "@/components/contact-form";
const Page = () => {
  return (

    
    <div className="md:w-[1200px]">
      <ContactForm/>
      <div className="md:flex md:flex-row justify-around mt-10 flex-col">
        <div className="w-1/2 ml-5">
          <h1 className="text-[rgba(21,24,117,1)] text-2xl font-bold">
            Information About us
          </h1>
          <p className="text-[rgba(138,143,185,1)] mt-5 w-[270px] h-[220px] md:w-[550px] md:h-[49px] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-[rgba(21,24,117,1)] text-2xl font-bold ml-4">
            Contact Way
          </h1>
          <div className="text-[rgba(138,143,185,1)] ml-4 w-[250px] md:w-[500px] mt-5 grid md:grid-cols-2 grid-cols-1 gap-4">
            <p>Tel: 877-67-88-99 E-Mail: shop@store.com</p>
            <p>Support Forum For over 24hr</p>
            <p>20 Margaret st, London Great britain, 3NM98-LK</p>
            <p>Free standard shipping on all orders.</p>
          </div>
        </div>
      </div>

      <div>
        <div className="ml-5 mt-10">
          <h1 className="text-[rgba(21,24,117,1)] text-2xl font-bold">Get In Touch</h1>
          <p className="text-[rgba(138,143,185,1)] mt-5 md:w-[550px] md:h-[49px] leading-7 
          w-[270px] h-[220px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </p>
        </div>
        <div className="md:w-[530px] md:h-[414px] ml-5 mt-5 w-[270px] h-[414px]">
          <input type="text" name="" id="" placeholder="Your Name" 
          className="border-2 border-[rgba(138,143,185,1)] md:w-[250px] h-[45px] w-[300px]"/>
          <input type="text" name="" id=""  placeholder="Your Email" 
          className="border-2 border-[rgba(138,143,185,1)] md:w-[250px] h-[45px] w-[300px] md:ml-7"/><br />
          <input type="text" name="" id=""  placeholder="Subject" 
          className="border-2 border-[rgba(138,143,185,1)] md:w-[530px] h-[45px] w-[300px] mt-5"/> <br />
          <textarea  className="border-2 border-[rgba(138,143,185,1)] md:w-[530px] md:h-[166px] h-[100px] w-[300px] mt-5" 
           name="text" cols={20} rows={10} placeholder='Your massage' id="">
            
            </textarea>
         
            <button className="px-6 py-2 bg-[rgba(251,46,134,1)] text-white mt-3 rounded-sm">Send Email</button>
        </div>
        
      </div>
    </div>
  );
};

export default Page;
