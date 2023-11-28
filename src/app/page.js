import Image from 'next/image'
import './globals.css'


export default function Home() {
  return (
    <div className="container">
      <div className="background-image">
        <div className="content">
          <p className='title_1'>
            AS-SIDQ TEST FIELD
            <br />
            <span className='title_2'>
              (For internal use only)
            </span>
          </p>
          <img src="/Tech_chipsets.png" alt="QDSB" />
          <p className='desc_1'>
            THE EVOLUTION OF TECH
            <br />
            <span className='desc_2'>
              A Journey Through the Decades of AI Advancements
            </span>
          </p>
          <p className='visit'>
            CONTACT US
            <br />
            <span className='aiaa'>
              QUAD DATA
              <br />
              0168278257
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

