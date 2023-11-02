// Sidebar.js
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';
import Members from "./Members";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { updatedSelectedTab } from "./actions";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./SideBar.css";
import { Box } from "@mui/material";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";

const Sidebar = () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.selectedTab);
  const [startDate, setStartDate] = useState(new Date());
  const location = useLocation();
  const dataToPass = location.state;
// console.log(startDate);

 
  const handleNextTab = () => {
    const nextTab = (parseInt(selectedTab) + 1).toString();
    dispatch(updatedSelectedTab(nextTab));
  };



  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    handleNextTab();
  };


  const memberCount = 2;


  const [allMemberData, setAllMemberData] = useState(Array(memberCount).fill({}));


  const handleMemberDataChange = (uniqueId, data) => {
    setAllMemberData((prevData) => {
      const newData = [...prevData];
      newData[uniqueId] = data;
      return newData;
    });
  };



const handleMainFormSubmit = () => {
  console.log(allMemberData);
};




// const handlePreviousTab = () => {
//   const previousTab = (parseInt(selectedTab) - 1).toString();
//   dispatch(updatedSelectedTab(previousTab));
// };







  if (dataToPass) {
    const { bankData} = dataToPass;
    // const memberCount = travelers[0].members;



























    
    return (
      <div className="grid-container">
        <div className="col-1">
          <div className="side">
            <div className="bankimage">
              <img src={bankData.image} alt="" />
            </div>
            <p className="ad">Plan Name : </p>
            <p className="bd">{bankData.plan}</p>
            <p className="ad">Premium : </p>
            <p className="bd">
              <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
              {bankData.premium}
            </p>
            <p className="ad">Sum Insured : </p>
            <p className="bd">
              <i className="fa-solid fa-indian-rupee-sign"></i> {bankData.self}
            </p>
            <p className="ad">Goods & ServiceTax :</p>
            <p className="bd">
              <i className="fa-solid fa-indian-rupee-sign"></i> {bankData.tax}
            </p>
            <p className="ad">Total Premium : </p>
            <p className="bd">
              <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
              {bankData.premium + bankData.self + bankData.tax}
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={selectedTab}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList aria-label="lab API tabs example" sx={{}}>
                  <Tab
                    label="PROPOSER DETAILS"
                    value="1"
                    onClick={() => dispatch(updatedSelectedTab("1"))}
                  />

                  <Tab label="MEMBER DETAILS" value="2" />
                  <Tab label="NOMINEE DETAILS" value="3" />
                  <Tab label="MEDICAL DETAILS" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <form
                  action=""
                  onSubmit={handleSubmit(formSubmit)}
                  className="container"
                >
                  <b className="p-3">PROPOSER DETAILS</b>
                  <div className=" row p-3 ">
                    <div className="col-md-4">
                      <div className="input_group">
                        <label htmlFor="title">Title</label>
                        <select
                          name="title"
                          id="title"
                          className="form_control"
                        >
                          <option value="mr">Mr</option>
                          <option value="mrs">Mrs</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="inputGroup">
                        <label htmlFor="FirstName">First Name</label>
                        <input
                          type="text"
                          placeholder="Enter First Name"
                          id="FirstName"
                          name="first"
                          maxLength={32}
                          minLength={3}
                          {...register("first", {
                            required: {
                              value: true,
                              message: "Please Enter Your First Name",
                            },
                            pattern: {
                              value: /^[A-Za-z]+$/,
                              message: "Enter a valid Name",
                            },
                          })}
                        />
                        <p className="err">{errors.first?.message}</p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="inputGroup">
                        <label htmlFor="title">Last Name</label>
                        <input
                          type="text"
                          placeholder="Enter Last Name"
                          name="last"
                          maxLength={32}
                          {...register("last", {
                            required: {
                              value: true,
                              message: "Please Enter Your Last Name",
                            },
                            pattern: {
                              value: /^[A-Za-z]+$/,
                              message: "Enter a valid Name",
                            },
                          })}
                        />
                        <p className="err">{errors.last?.message}</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="date_picker_div">
                        <label htmlFor="dob">Date of Birth</label>
                        <Controller
                          name="dob"
                          control={control}
                          defaultValue={null}
                          render={({ field }) => (
                            <DatePicker
                              selected={field.value}
                              placeholderText="Select Date of Birth"
                              onChange={(date) => {
                                setStartDate(date);
                                field.onChange(date);
                              }}
                              dateFormat="dd/MM/yyyy"
                              peekNextMonth
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                              customInput={
                                <input
                                  type="text"
                                  id="dob"
                                  name="dob"
                                  placeholder="Select Date of Birth"
                                  readOnly
                                  {...register("dob", {
                                    required: {
                                      value: true,
                                      message: "please Select Your DOB",
                                    },
                                  })}
                                />
                              }
                            />
                          )}
                        />
                        <p className="err">{errors.dob?.message}</p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input_group">
                        <label htmlFor="status">Martial Status</label>
                        <select
                          name="status"
                          id="status"
                          className="form_control"
                        >
                          <option value="MARRIED">MARRIED</option>
                          <option value="UNMARRIED">UMARRIED</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <b className="p-3">ADDRESS_DETAILS</b>
                  <div className="row p-3">
                    <div className="col-md-4">
                      <div className="inputGroup">
                        <label htmlFor="title">Pincode</label>
                        <input
                          type="text"
                          placeholder="Enter Pincode"
                          name="pincode"
                          maxLength={6}
                          minLength={6}
                          {...register("pincode", {
                            required: {
                              value: true,
                              message: "Please Enter Your Pincode",
                            },
                            pattern: {
                              value: /^\d{6}$/,
                              message: "Enter a valid PIN code",
                            },
                          })}
                        />
                        <p className="err">{errors.pincode?.message}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="inputGroup">
                        <label htmlFor="title">Address 1 *</label>
                        <input
                          type="text"
                          placeholder="Enter Address No.1"
                          name="address1"
                          {...register("address1", {
                            required: {
                              value: true,
                              message: "Please Enter Your Permanent Address",
                            },
                          })}
                        />
                        <p className="err">{errors.address1?.message}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="inputGroup">
                        <label htmlFor="title">Address 2 *</label>
                        <input
                          type="text"
                          placeholder="Enter Address No.2"
                          name="address2"
                          {...register("address2", {
                            required: {
                              value: true,
                              message: "Please Enter Your Present Address",
                            },
                          })}
                        />
                        <p className="err">{errors.address2?.message}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="inputGroup">
                        <label htmlFor="title">Email</label>
                        <input
                          type="text"
                          placeholder="Enter Email"
                          name="email"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Please Enter Your Email",
                            },
                            pattern: {
                              value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
                              message:
                                "Enter a valid email address ending with @gmail.com",
                            },
                          })}
                        />
                        <p className="err">{errors.email?.message}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="inputGroup">
                        <label htmlFor="title">Mobile *</label>
                        <input
                          type="text"
                          placeholder="Enter Mobile Number"
                          name="mobile"
                          maxLength={10}
                          minLength={10}
                          {...register("mobile", {
                            required: {
                              value: true,
                              message: "Please Enter Your Mobile Number",
                            },
                            pattern: {
                              value: /^[6-9]\d{9}$/,
                              message: "Enter a valid mobile number",
                            },
                          })}
                        />
                        <p className="err">{errors.mobile?.message}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="inputGroup">
                        <label htmlFor="title">Pan</label>
                        <input
                          type="text"
                          placeholder="Enter Pan Number"
                          name="pan"
                          maxLength={10}
                          minLength={10}
                          {...register("pan", {
                            required: {
                              value: true,
                              message: "Please Enter Your Pan Number",
                            },
                            pattern: {
                              value: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
                              message: "Enter a valid PAN card number",
                            },
                          })}
                        />
                        <p className="err">{errors.pan?.message}</p>
                      </div>
                    </div>
                  </div>

                  <div className="kyc">
                    <input type="submit" value="KYC Button" />
                  </div>
                </form>
              </TabPanel>

              <TabPanel value="2">
               

              {Array.from({ length: memberCount }).map((_, index) => (
        <Members
          key={index}
          uniqueId={index}
          onMemberDataChange={handleMemberDataChange}/>))}

      <button onClick={handleMainFormSubmit}>Submit All Member Data</button>




              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    );
  }
};

export default Sidebar;
