'use client'

import activity from "@/data/activity";
import { useEffect } from "react";

const AccommodationTypes = ({filter, setFilter}) => {

  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.dataset.name;
    const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    if (selectedCheckboxes.length > 1) {
      setFilter({ ...filter, accommodationType: "all" });
    } else {
      if (event.target.checked) {
        setFilter({ ...filter, accommodationType: checkboxName });
      } else {
        setFilter({ ...filter, accommodationType: "all" });
      }
    }
  };
  
  
  
  const accommodationTypes = [
    { name: "Hotel", count: 0 },
    { name: "Chalet", count: 0 },
  ];

  activity.forEach((item) => {
    if (item.accommodation === "Hotel") {
      accommodationTypes[0].count++;
    } else if (item.accommodation === "Chalet") {
      accommodationTypes[1].count++;
    }
  });

  return (
    <>
      {accommodationTypes.map((accommodationType, index) => (
        <div key={index} className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input data-name={accommodationType.name} type="checkbox" onChange={handleCheckboxChange}/>
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{accommodationType.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{accommodationType.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AccommodationTypes;
