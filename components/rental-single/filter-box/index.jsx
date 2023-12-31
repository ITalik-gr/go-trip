import GuestSearch from "./GuestSearch";
import DateSearch from "./DateSearch";
import Link from "next/link";


const index = ({rental}) => {

  const extras = rental?.extra;
  const extrasWithoutAccommodation = extras?.filter(extra => extra !== 'accommodation');

  const extrasType = {
    'transfer': "Transfer",
    'flights': "Flights",
    'ski_passes': "Ski pass",
    'ski_equipment': "Ski equipment",
    'accommodation': ""
  }


  return (
    <>

      <div className="col-12">
        <div className="text type d-flex justify-between text-15 fw-500">
          <span>Type of accommodation: </span>
          
          <span>{rental?.accommodation}</span>
        </div>
      </div>

      <div className="col-12">
        <div className="">
          <span className="text-15 fw-500">What is included in the tour: </span>
          <ul>
            {extrasWithoutAccommodation?.map((item, i) => {
              return <li className="text-15 fw-400 pl-5">- {extrasType[item]}</li>
            })}
            
          </ul>
        </div>
      </div>



      <div className="col-12">
        <Link
          href={`/booking-page?includes=${rental?.extra}&place=${rental?.id}`}
          className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white"
        >
          Book Now
        </Link>
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default index;
