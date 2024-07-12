import React from "react";

const GenderCheckbox = ({ongendercheckchange,selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text  text-white">Male</span>
          <input  type="checkbox" className="checkbox-yellow-600" checked={selectedGender=="male"} 
            onChange={()=>
              ongendercheckchange("male")
            }
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text  text-white">Female</span>
          <input  type="checkbox" className="checkbox-yellow-600" checked={selectedGender=="female"}
              onChange={()=>
                ongendercheckchange("female")
            }
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
