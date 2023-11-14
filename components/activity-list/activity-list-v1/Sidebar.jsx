import AccommodationTypes from "../sidebar/AccommodationTypes";
import OthersFilter from "../sidebar/OthersFilter";
import Duration from "../sidebar/Duration";
import Languages from "../sidebar/Languages";
import PirceSlider from "../sidebar/PirceSlider";
import PopularAttractions from "../sidebar/PopularAttractions";
import StarRating from "../sidebar/StarRating";
import PropertyName from "../sidebar/PropertyName";
// ? MAIN SIDEBAR
const Sidebar = ({filter, setFilter, filteredData}) => {
  // console.log(filter)
  return (
    <>

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Property Name</h5>
        <div className="sidebar-checkbox">
          <PropertyName filter={filter} setFilter={setFilter} filteredData={filteredData}/>
        </div>
        {/* End Sidebar-checkbox */}
      </div>

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Accommodation Types</h5>
        <div className="sidebar-checkbox">
          <AccommodationTypes filter={filter} setFilter={setFilter} filteredData={filteredData} />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}


      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider filter={filter} setFilter={setFilter} />
          </div>
        </div>
      </div>
      {/* End Nightly priceslider */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Star Raring</h5>
        <div className="sidebar-checkbox">
          <StarRating filter={filter} setFilter={setFilter} filteredData={filteredData}/>
        </div>
      </div>
      {/* End rating filter */}

    </>
  );
};

export default Sidebar;
