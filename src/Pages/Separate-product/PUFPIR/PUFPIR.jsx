/* eslint-disable react/no-unescaped-entities */
import '../ProductsCss.css'
// import data from "./products01.json"
import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'
const PUFPIR = () => {
    return (
        <>
        <Parelax heading={"Shree Foam PIR /PUF Products"} backgroundImage={image03} />
              <div className='separate-product'>
                <div className="separate-product-main-container">
                  <div className="separate-product-card">
                    <div className="separate-product-img">
                      <img src={product01new} alt="" />
                    </div>
                    <div className="separate-product-text">
                      {/* <p className='separate-product-title'>{productData.title}</p> */}
                      <h1>Shreeinsul Foam PIR /PUF Products</h1>
                      <h2>High Density PUF/PIR Supports</h2>
                      <a href="/path/to/your/file.pdf" download="filename.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>ShreeFoam offers a wide range of PUF supports. The density of PUF support ranges from 80 kg/m3 to 500 kg/m3. The higher density PUF supports can be made available against specific customer requirements. Shree Foam high density supports enable higher loads without increase in surface area. Shree Foam supports do not require sawing and shaping at site, the supports designed to suit exact pipe OD. Shree Foam supports are having excellent closed cell structure and it does not permit water / water vapour penetration.


                    </p>
                  </div>
                  <hr className='separate-product-hr' />
                  <div>
                    <div className="key-features">
                      <h3>Key Features:</h3>
                      <ul>
                        <li><span>  Durable</span></li>
                        <li><span>Pre-Fabricated and ready to use
                        </span> </li>
                        <li><span> Sawing and shaping not required at site</span> </li>
                        <li><span>Available in various density and dimensionsas per customer requirement
                        </span> </li>
                        <li><span>Excellent Thermal conductivity</span> </li>
                        <li><span>CFC free chemical system</span> </li>
                        <li><span> Leak proof </span> </li>
                        <li><span> Temperature ranges from -  200°C to max +100°C  </span> </li>
                        <li><span> Excellent dimensional density</span> </li>
                      </ul>
                    </div>
                    <div className='back-to-products-div'>
                      <Link to="/products">
                        <button className='separate-product-button'>Back to Products</button>
                      </Link>
                    </div>
        
                  </div>
                </div>
              </div>
              </>
      )
}

export default PUFPIR
