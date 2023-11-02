import AccommodationTypes from "../sidebar/AccommodationTypes";
import OthersFilter from "../sidebar/OthersFilter";
import Duration from "../sidebar/Duration";
import Languages from "../sidebar/Languages";
import PirceSlider from "../sidebar/PirceSlider";
import PopularAttractions from "../sidebar/PopularAttractions";
import StarRating from "../sidebar/StarRating";
// ? MAIN SIDEBAR
const Sidebar = ({filter, setFilter}) => {
  // console.log(filter)
  return (
    <>
      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Accommodation Types</h5>
        <div className="sidebar-checkbox">
          <AccommodationTypes filter={filter} setFilter={setFilter} />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Other</h5>
        <div className="sidebar-checkbox">
          <OthersFilter />
        </div>
        {/* End Sidebar-checkbox */}
      {/* </div>  */}
      {/* End Aminities filter */}

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
          <StarRating filter={filter} setFilter={setFilter}/>
        </div>
      </div>
      {/* End style filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Languages</h5>
        <div className="sidebar-checkbox">
          <Languages />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Aminities filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Popular Attractions</h5>
        <div className="sidebar-checkbox">
          <PopularAttractions />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Popular Attractions */}
    </>
  );
};

export default Sidebar;
