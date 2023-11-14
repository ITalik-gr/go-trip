
'use client'

import React, { useState, useEffect } from "react";
import CustomerInfo from "../CustomerInfo";
import { useSearchParams } from 'next/navigation'
import FlightsAll from "@/components/flight-all";
import Transfer from "../Transfer";
import { useDispatch, useSelector } from "react-redux";
import { setExtras, setPlace } from "@/features/order/orderSlice";
import Link from "next/link";

function Index() {
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch()
  const searchParams = useSearchParams()
 
  const search = searchParams.get('includes')
  const place = searchParams.get('place')


  const includes = search?.split(',');

  useEffect(() => {
    dispatch(
      setExtras(includes), 
    )
  }, []);

  
  const renderStep = () => {
    const { content } = stepsContent[currentStep];
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

  const allSteps = includes?.filter((include) => !["ski_equipment", "ski_passes", "accommodation"].includes(include));

  const typeComponent = {
    flights: <FlightsAll currentStep={currentStep} nextStep={nextStep} allSteps={allSteps} />,
    transfer: <Transfer currentStep={currentStep} nextStep={nextStep} allSteps={allSteps} />,
  }

  const stepName = {
    flights: "Flights",
    accommodation: "Accommodation",
    transfer: "Transfer",
  }

  const stepsContent = allSteps?.map((include, index) => ({
    title: stepName[include],
    stepNo: (index + 1).toString(),
    stepBar: index + 1 != includes.length ? (
      <>
        <div className="col d-none d-sm-block line-last">
          <div className="w-full h-1 bg-border"></div>
        </div>
      </>
    ) : (""),
    content: typeComponent[include],
  }));

  
  const state = useSelector((state) => state.order)

  const overviewOrder = () => {
    dispatch(setPlace(place))
    console.log(state);
  }
  return (
    <>
      <div className="row x-gap-40 y-gap-30 items-center justify-center steps">
        {/* Steps */}
        {stepsContent?.map((step, index) => (
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
          <Link href={`/overview?place=${place}&extras=${includes}&flights=${state.flights}&transfer=${state.transfer}`}>
            <button
              className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
              disabled={currentStep + 1 !== allSteps.length}
              onClick={overviewOrder}
            >
              Order <div className="icon-arrow-top-right ml-15" />
            </button>
          </Link>

        </div>
        {/* End next btn */}
      </div>
      {/* End stepper button */}
    </>
  );
};

export default Index;
