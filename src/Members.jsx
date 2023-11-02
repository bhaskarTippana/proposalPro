import React, { useState } from "react";
import {useForm} from "react-hook-form";
const Members = ({ onMemberDataChange , uniqueId}) => {
  // console.log(uniqueId , onMemberDataChange);
  const [memberData, setMemberData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  });

const {register , formState:{errors}} = useForm();




  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      onMemberDataChange(uniqueId, updatedData);
      return updatedData;
    });
  };

  return (
    <>
      <b>Traveller - {uniqueId + 1}</b>
      <form action="" style={{ background: "pink", border: "2px solid yellow" }}>
        <div>
          <label htmlFor={`firstName-${uniqueId}`}>First Name</label>
          <input
            type="text"
            id={`firstName-${uniqueId}`}
            name={`firstName-${uniqueId}`}
            value={memberData.firstName}
            onChange={handleInputChange}
            {...register("firstName-${uniqueId}" ,{
              required:{
                value:true,
                message:"please Fill your name"
              }
            }
            )}
          />
          <p style={{color:"red"}}>{errors.firstName?.message}</p>
        </div>

        <div>
          <label htmlFor={`lastName-${uniqueId}`}>Last Name</label>
          <input
            type="text"
            id={`lastName-${uniqueId}`}
            name={`lastName`}
            value={memberData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor={`dateOfBirth-${uniqueId}`}>Date of Birth</label>
          <input
            type="date"
            id={`dateOfBirth-${uniqueId}`}
            name={`dateOfBirth`}
            value={memberData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </>
  );
};

export default Members;
