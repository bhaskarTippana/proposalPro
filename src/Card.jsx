import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const Card = (props) => {
  // console.log(props);
const {data, isChecked, onCheckboxChange ,id, travelers} = props;
// console.log(travelers[0].ages.length);
const navigate = useNavigate();

  const handleBuy = () => {
    const dataToPass = {
      bankData: data,
      travelers: travelers
    };

    navigate('/sidebar', { state: dataToPass });
  };

const handleMore = () =>{
  alert('optional features');
}


  return (
    <div className='bank-1'>
      <div className='a'>
        <div>
        <input
        type="checkbox"
        checked={isChecked}
        onChange={()=> onCheckboxChange(id,data)}
      />
        </div>
        <div className='image'><img src={props.data.image} alt="" /></div>
      </div>

      <div className="b">
        <div className='pp'><p className='ppp'>Plan</p></div>
        <div className='pl'>{props.data.plan}</div>
      </div>

      <div className="c">
        <div className='pp'>
          <p className='aaa'>Additional Covers</p>
        </div>
        <div className='demo'>
          <div className='demo-1'>
            <div>
              <h5>Co-Payment <i className="fa-solid fa-bell"></i></h5>
              <p>ZONE WISE CAPPING OF 20%</p>
            </div>
            <div>
              <h5>PRE-Travel <i className="fa-solid fa-bell"></i></h5>
              <p>60 Days</p>
            </div>
            <div>
              <h5>Special Criteria <i className="fa-solid fa-bell"></i></h5>
              <p>10% OF SUM INSURED PER DAY (EXCLUDING CUMULATIVE BONUS) CONTRACTUAL WHICHEVER IS LOWER</p>
            </div>
          </div>


          <div className='demo-1'>
            <div>
              <h5>Co-Payment <i className="fa-solid fa-bell"></i></h5>
              <p>ZONE WISE CAPPING OF 20%</p>
            </div>
            <div>
              <h5>PRE-Travel <i className="fa-solid fa-bell"></i></h5>
              <p>60 Days</p>
            </div>
            <div>
              <h5>Special Criteria <i className="fa-solid fa-bell"></i></h5>
              <p>10% OF SUM INSURED PER DAY (EXCLUDING CUMULATIVE BONUS) CONTRACTUAL WHICHEVER IS LOWER</p>
            </div>
          </div>

        </div>
      </div>

      <div className="d">
        <div className='pp'>
          <p className='aaa'>Premium</p>
        </div>
        <div className='dd'>
          <div>
            <p><i className="fa-solid fa-indian-rupee-sign"></i>  {props.data.amount}</p>
            {/* <Link to="/sidebar"> */}
              <div className='btn' onClick={handleBuy}>Buy</div>
            {/* </Link> */}
          </div>
        </div>

        <section>
          <p onClick={handleMore}>View More</p>
        </section>
      </div>
    </div>
  );
}

export default Card;
