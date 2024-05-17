import React from "react";
import './client.css';
import ImageSliderAuto from "../imageSlider/ImageSliderAuto";
import {ImageData} from '../../json/JsonData';

const Client = () => {
  return (
    <section id='client'>

      <div id='clients'>

      <h2 className="clientTitle">Clients</h2>
      <p className='clientDesc'>As a Camera-Operator I have worked for many clients, from my previous full time job in Hilversum to freelance
      jobs for other companys. You will mostly find me behind a camera on sport events such as the 'Azerion Vrouwen Eredvisie' or studio jobs such as 'Hart Van Nederland' or 'Shownieuws'.
      These jobs are all done for broadcast facilitie companys</p>
      
      </div>

      <div className='imageSliders'>
      <ImageSliderAuto id='imageSlider' ImageData={ImageData} SlideInterValTime={4000}/>
      </div>

    </section>
  )
}

export default Client;