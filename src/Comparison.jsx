import React  from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


import "./Comparison.css"
import logo from "./assets/logo.png"
const Comparison =({ selectedBanks , onClose , travelers , countries , ages}) => {
  const bank1=selectedBanks[0];
  const bank2=selectedBanks[1];

      const AccordianStyles={
        color:'black',
        display:'flex',
        justifyContent:'flexEnd',
        alignItems:'center',
        margin:'auto',
        textAlign:'center',
        maxWidth:'230px',
        fontSize:'1em',
        fontWeight:'700',
        fontFamily:'poppins',
        paddingLeft:'2.5em'
      }

      const generatePDF = () => {
        const element = document.querySelector('.mainChild');
        if (element) {
          const pdfWidth = element.offsetWidth;
          const pdfHeight = element.offsetHeight;
          const pixelRatio = window.devicePixelRatio || 1;
      
          html2canvas(element, {
            width: pdfWidth * pixelRatio,
            height: pdfHeight * pixelRatio,
            scale: pixelRatio,
          }).then((canvas) => {
            const imgData = canvas.toDataURL('image/jpeg');
            const pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);
            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('comparison.pdf');
          });
        }
      };
      
      
      
      
      
      


  return (
    <>
     <div  className='comparison-modal' >
    <div className='gridContainer'>
        <div className="mainChild" id='comparison-container' >
            <div className="subChild">
            <div className='log'><img src={logo} alt="" /></div>
           <div className='valuesOfUser'>
           
            <p><span className='spans'>CRF :</span> {travelers[0].crn}</p>
            <p></p>
            <div><p><span className='spans'>Quote date :</span> {travelers[0].start}</p>
            <p><span className='spans'>PDF date :</span> {travelers[0].start}</p></div>
            <p><span className='spans'>Members :</span> {travelers[0].members}</p>
            <p><span className='spans'>Ages :</span> {ages()}</p>
            <p><span className='spans'>Duration :</span> {travelers[0].start} to {travelers[0].end}</p>
            <p><span className='spans'>Countries :</span> {countries()}</p>
            
           </div>
          
           <div className='mark' onClick={onClose}><i className="fa-solid fa-xmark"></i></div>
            </div>
         <div className="control">
         <div className='childrens'>
              <div className="child">
              <div className='com'><p>Comparison</p></div>
              {bank1 && <div className='test'><img src={bank1.image} alt="" /></div>}
                {bank2 && <div className='test pad'><img src={bank2.image} alt="" /></div>}
              </div>
              <div className="childs">
                        <div>Premium</div>
                        {bank1 && <div className='digit'><p className='dig'><i className="fa-solid fa-indian-rupee-sign"></i> {bank1.premium}/-</p></div>}
                        {bank2 && <div className='digitt'><p className='dig'><i className="fa-solid fa-indian-rupee-sign"></i> {bank2.premium}/-</p></div>}
              </div>

              <div className="childs">
                <div>Final</div>
                {bank1 && <div>{bank1.final}/-</div>}
                {bank2 && <div>{bank2.final}/-</div>}

              </div>

              <div className="childs">
                <div><Accordion sx={{boxShadow:'0'}}>
        <AccordionSummary sx={AccordianStyles}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant=''>Special Premium</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion></div>
      {bank1 && <div>{bank1.special}/-</div>}
                {bank2 && <div>{bank2.special}/-</div>}
              </div>


              <div className="childs">
                <div><Accordion sx={{boxShadow:'0'}}>
        <AccordionSummary sx={AccordianStyles}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant=''>Self Plan Premium</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion></div>
              {bank1 && <div>{bank1.self}/-</div>}
              {bank2 && <div>{bank2.self}/-</div>}
              </div>


              <div className="childs">
                <div><Accordion sx={{boxShadow:'0'}} >
        <AccordionSummary sx={AccordianStyles}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant=''>Benefits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion></div>
                 {bank1 && <div>{bank1.benefits}/-</div>}
                {bank2 && <div>{bank2.benefits}/-</div>}
              </div>


              <div className="childs">
                <div>Service Tax/GST</div>
                {bank1 && <div>{bank1.tax}/-</div>}
                {bank2 && <div>{bank2.tax}/-</div>}
              </div>

              <div className="childs m">
                <div></div>
                <div className='digit'><p className='down' onClick={generatePDF}>DOWNLOAD</p></div>
                <div></div>
              </div>
     


            </div>
         </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Comparison;