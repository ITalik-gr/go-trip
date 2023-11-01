
'use client'

import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingSummary from "./sidebar/PricingSummary";
import PaymentSchedule from "./sidebar/PaymentSchedule";
import PromoCode from "./sidebar/PromoCode";
import RatingInfo from "./RatingInfo";

const OrderDetails = () => {
  const [itemsTabs, setItemsTabs] = useState(1);
  
  const cardTabs = [
    { id: 1, name: "Credit/Debit Card" },
    { id: 2, name: "Digital Payment" },
  ];

  return (
    <>
      <div className="col-xl-7 col-lg-8">
        {/* <RatingInfo /> */}
   


        <div className="d">here</div>
        {/* End mt-40 */}

        <div className="w-full h-1 bg-border mt-40 mb-40" />
        <div className="row y-gap-20 items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-14 lh-10 text-light-1 ml-10">
                Get access to members-only deals, just like the millions of
                other email subscribers
              </div>
            </div>
          </div>
          {/* End col-auto */}
        </div>
        {/* End terms and conditons */}
      </div>
      {/* End payment details */}


      <div className="col-xl-5 col-lg-4">
        <div className="booking-sidebar">
          <PricingSummary />
          <PaymentSchedule />
          <PromoCode />
        </div>
      </div>
      {/* payment sidebar info */}
    </>
  );
};

export default OrderDetails;
