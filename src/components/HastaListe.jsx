import React from "react";
import { FaTimesCircle } from "react-icons/fa";


const HastaListe = ({ hastalar, setHastalar }) => {
  return (
    <div>
      {hastalar.map(({id, text, day, doktorum, bittiMi}) => (
            <div key={id}

            onDoubleClick={()=> setHastalar(hastalar.map((hst)=> hst.id === id ? {...hst, bittiMi:!hst.bittiMi} : hst))}
            className={bittiMi ? "trueBittiStil" : "falseBitmediStil"}
            //  hastalar dizisinde dolaş,her bir hastanın id sine bak, benim tıkladığım id ile eşleşen objeyi al, objenin diğer keyleri aynen dursun (...hst ile yaptik)sadece bittiMi key li değeri, true ise false, false ise true olsun
               
            >
              <div>
                <h2>{text}</h2>
                <h4>{day}</h4>
                <h3>{doktorum}</h3>
              </div>
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={()=>setHastalar(hastalar.filter((a)=>a.id!== id))}
               
              />
            </div>
       
        )
      )} 
    </div>
  );
};

export default HastaListe;
