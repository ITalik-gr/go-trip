"use client"

import Header11 from "@/components/header/header-11";
import Overview from "@/components/rental-single/Overview";
import TopBreadCrumb from "@/components/rental-single/TopBreadCrumb";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import FlightProperties from "@/components/flight-list/flight-list-v1/FlightProperties";
import FlightItem from "@/components/flight-list/flight-list-v1/FlightItem";
import CarItem from "@/components/car-list/car-list-v1/CarItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";


const OverviewOrder = () => {

  const [place, setPlace] = useState();
  const [transfer, setTransfer] = useState();
  const [flights, setFlights] = useState();
  const [loading, setLoading] = useState(true);
  
  const searchParams = useSearchParams();
  
  const placeId = searchParams.get('place');
  const extras = searchParams.get('extras');
  const flightsId = searchParams.get('flights');
  const transferId = searchParams.get('transfer');
  
  useEffect(() => {
    const fetchPlace = fetch(`http://localhost:8000/items/${placeId}`).then(data => data.json());
    const fetchTransfer = fetch(`http://localhost:8000/cars/${transferId}`).then(data => data.json());
    const fetchFlights = fetch(`http://localhost:8000/flights/${flightsId}`).then(data => data.json());
  
    Promise.all([fetchPlace, fetchTransfer, fetchFlights])
      .then(([placeData, transferData, flightsData]) => {
        setPlace(placeData);
        setTransfer(transferData);
        setFlights(flightsData);
        setLoading(false);
      });
  }, []);
  

  return (
    <>

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <TopBreadCrumb />
      {/* End top breadcrumb */}

      <div className="container">
        {loading ? 
              <section className="dots-container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </section> : (
          <div className="content mt-15">
            <h3 className="overview-title">Trip summary</h3>
            <hr />

            <div className="overview-item">
              <div className="overview-item__title">Stay</div>

              <div className="overview-item-card overview-item__stay">
                <div className="overview-item-image overview-item__stay-image">
                  <img src={place?.slideImg[0]} alt="" />
                </div>

                <div className="overview-item__stay-text">
                  <div className="overview-item__stay-name">
                    {place?.title}
                  </div>
                  <div className="overview-item__stay-place">
                    <svg width={20} viewBox="0 0 1024 1024">
                      <path d="M512 125.969c-143.133 0-258.845 117.524-258.845 262.366 0 136.358 66.786 264.567 135.514 360.055 34.176 47.479 68.384 86.251 94.039 113.135 11.925 12.497 21.982 22.4 29.291 29.389 7.309-6.989 17.365-16.892 29.291-29.389 25.655-26.884 59.861-65.655 94.042-113.135 68.727-95.488 135.514-223.697 135.514-360.055 0-144.842-115.712-262.366-258.846-262.366zM512 918.366c-12.979 15.407-12.983 15.403-12.992 15.398l-0.073-0.064-0.188-0.166-0.666-0.593c-0.576-0.512-1.404-1.259-2.475-2.236-2.142-1.95-5.239-4.813-9.156-8.533-7.834-7.445-18.957-18.342-32.273-32.299-26.611-27.887-62.091-68.092-97.603-117.427-70.649-98.155-143.241-234.961-143.241-384.111 0-167.523 133.775-303.002 298.667-303.002 164.894 0 298.667 135.479 298.667 303.002 0 149.15-72.593 285.956-143.241 384.111-35.511 49.335-70.993 89.54-97.604 117.427-13.316 13.956-24.439 24.853-32.273 32.299-3.917 3.721-7.014 6.583-9.156 8.533-1.071 0.977-1.899 1.724-2.475 2.236l-0.666 0.593-0.188 0.166-0.055 0.047c-0.004 0.009-0.030 0.026-13.009-15.381zM512 918.366l13.009 15.381c-7.462 6.549-18.539 6.562-26.001 0.017l12.992-15.398zM512 266.604c-66.483 0-120.163 54.62-120.163 121.731s53.68 121.732 120.163 121.732c66.483 0 120.162-54.622 120.162-121.732s-53.679-121.731-120.162-121.731zM352.014 388.335c0-89.792 71.745-162.366 159.986-162.366 88.239 0 159.987 72.575 159.987 162.366s-71.748 162.368-159.987 162.368c-88.241 0-159.986-72.576-159.986-162.368z"></path>
                    </svg>
                    <span>{place?.location}</span>
                  </div>
                  <div className="overview-item__stay-rating">
                  <svg fill="#f39527" color="#f39527" width={16} viewBox="0 0 1024 1024">
                    <path d="M512 85.333c7.991 0 15.334 4.402 19.115 11.457l139.264 259.93 249.071 28.696c8.205 0.945 15.159 6.478 17.946 14.271s0.913 16.495-4.826 22.447l-194.641 201.823 55.71 288.836c1.613 8.354-1.783 16.879-8.691 21.824s-16.060 5.397-23.42 1.156l-249.527-143.744-249.528 143.744c-7.36 4.241-16.509 3.789-23.417-1.156s-10.305-13.47-8.694-21.824l55.711-288.836-194.641-201.823c-5.74-5.952-7.611-14.653-4.826-22.447s9.743-13.326 17.947-14.271l249.070-28.696 139.264-259.93c3.78-7.055 11.123-11.457 19.115-11.457z"></path>
                    </svg>
                    <span>{place?.ratings}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="overview-item">
              <div onClick={() => getState()} className="overview-item__title">Flights</div>

              <div className="overview-item-card overview-item__fli">
                <FlightItem flights={flights} />
              </div>
            </div>

            <div className="overview-item">
              <div className="overview-item__title">Transfer</div>

              <div className="overview-item-card overview-item__fli">
                <CarItem transfer={transfer} />
              </div>
            </div>

          </div>
        )}
      </div>



      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  )
}


export default OverviewOrder;