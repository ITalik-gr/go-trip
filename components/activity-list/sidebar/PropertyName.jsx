const PropertyName = ({filter, setFilter}) => {

  const changeName = (e) => {

    let inputText = e.target.value;
    if(inputText.length == 0) {
      setFilter({...filter, name: "all"})
      return
    }
    setFilter({...filter, name: inputText})
  }

  return (
    <>
      {/* {languages.map((language, index) => ( */}
        <div className="row y-gap-10 items-center justify-between">
          <div className="col-12">
            {/* <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{language.name}</div>
            </div> */}
            <input onChange={(e) => changeName(e)} className="sidebar-input property-name__input" type="text" name="PropertyName" id="PropertyName" placeholder="Please enter the name" />
          </div>
          {/* End .col */}
          {/* <div className="col-auto">
            <div className="text-15 text-light-1">{language.count}</div>
          </div> */}
        </div>
      {/* ))} */}
    </>
  );
};

export default PropertyName;
