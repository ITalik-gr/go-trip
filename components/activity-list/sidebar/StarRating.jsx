
import Image from "next/image";

const StarRating = ({filter, setFilter, filteredData}) => {

  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.dataset.name;
    const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    console.log(selectedCheckboxes)
    console.log(`Current Rating: ` + checkboxName)

    if (selectedCheckboxes.length > 1) {
      setFilter({ ...filter, starRating: "all" });
    } else {
      if (event.target.checked) {
        setFilter({ ...filter, starRating: checkboxName });
      } else {
        console.log(`Current Rating: ALL`)
        setFilter({ ...filter, starRating: "all" });
      }
    }
  };

  const checkboxes = [
    { id: 5, label: "5", count: 0 },
    { id: 4, label: "4", count: 0 },
    { id: 3, label: "3", count: 0 },
    { id: 2, label: "2", count: 0 },
    { id: 1, label: "1", count: 0 },
  ];

  if(filteredData?.length >= 0) {
    filteredData?.forEach((item) => {
      switch (true) {
        case item.ratings >= 5:
          checkboxes[0].count++;
          break;
        case item.ratings >= 4:
          checkboxes[1].count++;
          break;
        case item.ratings >= 3:
          checkboxes[2].count++;
          break;
        case item.ratings >= 2:
          checkboxes[3].count++;
          break;
        case item.ratings >= 1:
          checkboxes[4].count++;
          break;
        default:
          break;
      }
    });
  }
  


  return (
    <>
      {checkboxes.map((checkbox) => (
        <div
          key={checkbox.id}
          className="row y-gap-10 items-center justify-between"
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input data-name={checkbox.label} onChange={handleCheckboxChange} type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{checkbox.label}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{checkbox.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StarRating;
