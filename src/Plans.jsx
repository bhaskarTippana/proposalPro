import React from 'react';
import Card from "./Card";
import Data from "./Banks.json";
import "./Plans.css";
import a from "./assets/plane.gif";
import travelData from "./Travel.json";
import Comparison from './Comparison';
import Modal from './Modal';
import { useState } from 'react';



const Plans = () => {


  const [count,setCount] = useState(3);
  const [comparisonModal,setComparisonModal] = useState(false);
  const[selectedBanks , setSelectedBanks] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (id, bankData) => {
    if (selectedCheckboxes.includes(id)) {
      setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== id));
      setSelectedBanks(selectedBanks.filter(bank => bank.id !== id));
    } else if (selectedCheckboxes.length < 2) {
      setSelectedCheckboxes([...selectedCheckboxes, id]);
      setSelectedBanks([...selectedBanks, bankData]);
    }
  };

  const handleOpenComparison = () => {
    if (selectedBanks.length === 2) {
      setComparisonModal(true);
    }
  };


const handlePrevious = () =>{
  alert('previous Page')
}


  const handleCloseComparison = () => {
    setComparisonModal(false);
    setSelectedBanks([]);
    setSelectedCheckboxes([]);
  };

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

function countries(){
  let a=""
  for(let i=0;i<travelData[0].countries.length;i++){
    if(i === travelData[0].countries.length - 1){
      a+=(travelData[0].countries[i]);
    }else{
    a+=(travelData[0].countries[i]+", ");
    }
  }
  return a;
}

function Ages(){
  let a=""
  for(let i=0;i<travelData[0].ages.length;i++){
    if(i === travelData[0].ages.length - 1){
      a+=(travelData[0].ages[i]);
    }else{
    a+=(travelData[0].ages[i]+", ");
    }
  }
  return a;
}



  return (
    <>
    <div className="container">
        <div className='row-1'>
            <p className='p'>Plans</p>
            <div className='car-img'>
                        <img src={a} alt="" />
            </div>
            <div className='step'>
                <p>step 1 <span style={{color:"#23A8FA"}}>(In Progress)</span></p>
                <p>Plan Details</p>
            </div>
        </div>
        <div className="row-2">
            <div className='col bor'>
                <p>Showing Plan Details For</p>
                <p>Travel</p>
            </div>
            <div className='col'>
                <p>Travelling To: {countries()}</p>
                <p>Membes : {travelData[0].members}</p>
            </div>
            <div className='col'>
               <p>Duration :{travelData[0].start} to {travelData[0].end}</p>
               <p>Travelers Age :{Ages()}</p>
            </div>
            <div className='col'>
                <p className='sum'>Sum Insured : <select name="" id="">
                    <option value="25000">25000</option>
                    <option value="25000">50000</option>
                    <option value="25000">250000</option>
                    <option value="25000">500000</option>
                    </select></p>
            </div>
        </div>
        <div className="row-3">
            <div className='rec'>
                 <div className='reco'> <p>Recommended<select name="" id="">
                    </select></p>
                    </div>

                    <div className="banks">
                    {Data.slice(0, count).map((e, i) => (
            <Card key={i} data={e}  id={i}  isChecked={selectedCheckboxes.includes(i)}
            onCheckboxChange={() => handleCheckboxChange(i,e)} travelers={travelData} />
          ))}
  <div className='add'>
    <div></div>
    <div className='more' onClick={handleClick}><p>Add More  +</p></div>
  </div>
</div>


                <div className='buttons'>
                    <div onClick={handlePrevious}>Previous</div>
                    <p></p>
                    <button className='enable' onClick={handleOpenComparison}>Add To Compare</button>
                    
                    </div>  
            </div>
        </div>

        <Modal isOpen={comparisonModal}>
        <Comparison selectedBanks={selectedBanks} travelers={travelData} countries={countries} ages={Ages}  onClose={handleCloseComparison}/>
      </Modal>

    </div>
    </>
  );
}

export default Plans;