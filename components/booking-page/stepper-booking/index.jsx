
'use client'

import React, { useState, useEffect } from "react";
import CustomerInfo from "../CustomerInfo";
import PaymentInfo from "../PaymentInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";
import OrderDetails from "../OrderDetails";
import { useSearchParams } from 'next/navigation'
import FlightsAll from "@/components/flight-all";
import Transfer from "../Transfer";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);


  // const searchParams = useSearchParams()
 
  // const search = searchParams.get('includes')

  // const includes = search.split(',');

  // console.log(includes);

  const typeComponent = {
    flights: <FlightsAll />,
    accommodation: <CustomerInfo />,
    transfer: <Transfer />,
  }
  const stepName = {
    flights: "Flights",
    accommodation: "Accommodation",
    transfer: "Transfer",
  }
    // Генеруємо динамічні степи на основі includes
    
    const allSteps = includes
    .filter((include) => !["ski_equipment", "ski_passes"].includes(include))
    .map((include, index) => ({
      title: stepName[include],
      stepNo: (index + 1).toString(),
      stepBar: index + 1 !== includes.length - 2 ? (
        <>
        {console.log(index + 1 !== includes.length)}
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ) : (""),
      content: typeComponent[include],
    }));
  
    // Об'єднуємо статичні та динамічні степи
  

  const renderStep = () => {
    const { content } = allSteps[currentStep];
    return <>{content}</>;
  };

  const nextStep = () => {
    if (currentStep < allSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className="row x-gap-40 y-gap-30 items-center justify-center">
        {allSteps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="col-auto">
              <div
                className="d-flex items-center cursor-pointer transition"
                onClick={() => setCurrentStep(index)}
              >
                <div
                  className={
                    currentStep === index
                      ? "active size-40 rounded-full flex-center bg-blue-1"
                      : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                  }
                >
                  {currentStep === index ? (
                    <>
                      <i className="icon-check text-16 text-white"></i>
                    </>
                  ) : (
                    <>
                      <span>{step.stepNo}</span>
                    </>
                  )}
                </div>

                <div className="text-18 fw-500 ml-10"> {step.title}</div>
              </div>
            </div>
            {/* End .col */}

            {step.stepBar}
          </React.Fragment>
        ))}
      </div>
      {/* End stepper header part */}

      <div className="row">{renderStep()}</div>
      {/* End main content */}

      <div className="row x-gap-20 y-gap-20 pt-20">
        <div className="col-auto">
          <button
            className="button h-60 px-24 -blue-1 bg-light-2"
            disabled={currentStep === 0}
            onClick={previousStep}
          >
            Previous
          </button>
        </div>
        {/* End prvious btn */}

        <div className="col-auto">
          <button
            className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
            disabled={currentStep === allSteps.length - 1}
            onClick={nextStep}
          >
            Next <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End next btn */}
      </div>
      {/* End stepper button */}
    </>
  );
};

export default Index;
