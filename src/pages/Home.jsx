import { useState } from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";
import { doktorData, hastaData } from "../helper/Data";

const Home = () => {
  const [hastalar, setHastalar] = useState(hastaData);
  const [doktorlar, setDoktorlar] = useState(doktorData);
  const [tikla, setTikla] = useState(true);

  const doktorClick=(id)=>{
    setTikla(!tikla)
    setDoktorlar(tikla ? doktorlar.filter((i)=>i.id===id) : doktorData)
  }

  return (
    <div style={{display:tikla ? "block" : "flex"}}>
      <div>
        <header className="header">
          <h1>HOSPİTAL</h1>
          <div className="dr">{
            doktorlar.map((dr)=>(<div key={dr.id}>

<img
onClick={()=>doktorClick(dr.id)}
className="btn"
style={{backgroundColor:tikla ? "aqua" : "lightgreen"}}
src={dr.resim} alt="" width="180px" height="160px"/>
<h4 style={{backgroundColor:tikla ? "aqua" : "lightgreen", 
borderLeft:`10px solid ${tikla ? "blue" : "green"}`}}>{dr.doktor}</h4>
            </div>))
          }</div>
        </header>

        {!tikla && <HastaEkle hastalar={hastalar} setHastalar={setHastalar}/>}
      </div>

      <HastaListe hastalar={hastalar} setHastalar={setHastalar}/>
    </div>
  );
};

export default Home;
