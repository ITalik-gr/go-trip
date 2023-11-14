
import Sidebar from "../car-list/car-list-v1/Sidebar";
import CarPropertes from "../car-list/car-list-v1/CarPropertes";

const Transfer = ({nextStep, allSteps, currentStep}) => {
  return (
    <section className="transfer layout-pt-md layout-pb-md mt-20">
    <div className="container">
      <div className="row y-gap-30">
        {/* Left */}
        <div className="col-xl-3">
          <aside className="sidebar py-20 px-20 xl:d-none bg-white">
            <div className="row y-gap-40">
              {/* <TransferSidebar /> */}
              <Sidebar />
            </div>
          </aside>
          {/* End sidebar for desktop */}

          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="listingSidebar"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">
                Filter Tours
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            {/* End offcanvas header */}

            <div className="offcanvas-body">
              <aside className="sidebar y-gap-40  xl:d-block">
              <Sidebar />
              </aside>
            </div>
            {/* End offcanvas body */}
          </div>
          {/* End mobile menu sidebar */}
        </div>
        {/* End col */}

        <div className="col-xl-9 ">
          <div className="row">
          <CarPropertes nextStep={nextStep} allSteps={allSteps} currentStep={currentStep} />
          </div>
          {/* End .row */}
        </div>
        {/* End .col for right content */}
      </div>
      {/* End .row */}
    </div>
    {/* End .container */}
  </section>
  )
}

export default Transfer


{/* <TransferCard /> */}