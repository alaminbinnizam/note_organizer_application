import React from 'react'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Layout from '../Layout/Layout';

const Contact = () => {
  return (
    <>
     <Layout title={'Contact Page'}>
    <div className="row contactus mt-5 ms-5 ">
        <div className="col-md-7 ">
          <img
            src="/images/callcenter.jpg"
            alt="contactus"
            style={{ width: "100%" }} 
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : aqushop@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Contact
