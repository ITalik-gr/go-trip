import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";

const CustomerInfo = () => {
  return (
    <>
    

      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          <BookingDetails />
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default CustomerInfo;
