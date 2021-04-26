import React from "react";
import styled from "styled-components";
import S from './logos/logo-s-large.jpeg';
import M from './logos/logo-m-large.jpeg';
import SD from './logos/logo-sd-large.jpeg';
import C from './logos/logo-c-large.jpeg';
import V from './logos/logo-v-large.jpeg';
import KD from './logos/logo-kd-large.jpeg';
import L from './logos/logo-l-large-ny3.jpeg';
import MP from './logos/logo-mp-large.jpeg';

const Card = ({ hangar_id, name, lastname, parti, photo, location, info }) => {
  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 text-center" key={hangar_id}>
        <div class="w-full h-auto p-2 mx-auto relative ">
            <img className="w-40 h-40  object-contain rounded-full border-2 border-gray-200 mx-auto" src={photo} alt="profile" />
            <img className="w-10 h-auto py-2 bottom-0 mx-auto inset-x-0" src={ 
                parti === "S" ? S
                : parti === "M" ? M
                : parti === "SD" ? SD
                : parti === "C" ? C
                : parti === "V" ? V
                : parti === "KD" ? KD
                : parti === "L" ? L
                : parti === "MP" ? MP
                : null
            }></img>
        </div>
        <h3 className="text-xl text-gray-900 font-medium leading-8">{name} {lastname}</h3>
        <p className="inline-block bg-gray-200 rounded-full m-3 px-5 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">{parti}</p>
        <p className="inline-block m-3 px-5 py-1 text-sm font-light text-gray-600 mr-2 mb-2">{location}</p>
        {/* {console.log(info)} */}

      </div>
  );
};



// const Profile = styled.div`
//   border: 1px solid #ccc;
//   box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);

//   img {
//     max-width: 100%;
//   }
// `;
export default Card;
