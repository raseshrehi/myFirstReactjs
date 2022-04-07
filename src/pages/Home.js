import React, {useState} from "react";
import './Home.css';

function Home(){

  const [firstname,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  const [firstErr,setFirstErr] = useState(false);
  const [lastErr,setLastErr] = useState(false);

  function frmSubmit(e){
    if(firstname.length<1 || lastname.length<1)
    {
      alert("Please fill all details")
    }
      e.preventDefault()
  }

  function firstHandler(e){
    let item = e.target.value;
    if(item.length<1){
      setFirstErr(true)
  }
  else{
    setFirstErr(false)
  }
  setFirstName(item)
}
  function lastHandler(e){
    let item = e.target.value;
    if(item.length<1){
      setLastErr(true)
  }
  else{
    setLastErr(false)
  }
  setLastName(item)
  }
  
    return(
            <div className="formDiv">
            <h3>Sign Up Now</h3>
            <p>&nbsp;</p>
<form className="row g-3">
  <div className="col-md-6">
    <input type="text" className="form-control" name="firstname" id="firstname" placeholder="First Name"
      onChange={firstHandler}/>{firstErr?<span style={{color:"red"}}>Please fill your First Name</span>:""}
  </div>
  <div class="col-md-6">
    <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Last Name" onChange={lastHandler}/>{lastErr?<span style={{color:"red"}}>Please fill your Last Name</span>:""}
  </div>

  <div className="divider py-1 bg-light mb-3"></div>
  <p><b>Please select your favorite Web language</b></p>
  <div className="col-12 forInline align-content-center">
  <div className="form-check">
  <input className="form-check-input" type="radio" name="wlang" id="wlang"/>
  <label className="form-check-label" for="html">HTML</label>
</div>
<div className="form-check forRadio">
  <input className="form-check-input" type="radio" name="wlang" id="wlang"/>
  <label className="form-check-label" for="css">CSS</label>
  </div>
  <div className="form-check forRadio">
  <input className="form-check-input" type="radio" name="wlang" id="wlang"/>
  <label className="form-check-label" for="javascript">JAVASCRIPT</label>
    </div>
</div>

<div className="divider py-1 bg-light mb-3"></div>
<p><b>Which languages you work on</b></p>
  <div className="col-12 forInline">
  <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" name="chk1" id="chk1" value="chk1"/>
  <label className="form-check-label" for="Checkbox1">JAVA</label>
</div>
<div className="form-check form-check-inline forRadio">
  <input className="form-check-input" type="checkbox" name="chk2" id="chk2" value="chk2"/>
  <label className="form-check-label" for="Checkbox2">PHP</label>
</div>
<div className="form-check form-check-inline forRadio">
  <input className="form-check-input" type="checkbox" name="chk3" id="chk3" value="chk3"/>
  <label className="form-check-label" for="Checkbox3">CPP</label>
</div>
</div>

<div className="divider py-1 bg-light mb-3"></div>

<div className="col-md-6">
  <select className="form-select" name="lang">
  <option value={null}>Select Option</option>
  <option value="HTML">HTML</option>
  <option value="HTML5">HTML5</option>
  <option value="CSS">CSS</option>
  <option value="CSS3">CSS3</option>
  <option value="CPP">CPP</option>
  <option value="JAVASCRIPT">JAVASCRIPT</option>
  <option value="JAVA">JAVA</option>
</select>
</div>
               
<div className="col-md-6">
<input type="date" className="form-control" name="date" id="date" placeholder="Select Date"/>
</div>
<div className="divider py-1 bg-light mb-3"></div>
  <div className="col-md-6">
  <input type="hidden" name="country" id="countryId" value="IN"/>
<select name="state" class="states order-alpha form-select" id="stateId">
    <option value="">Select State</option>
</select>
</div>
  <div className="col-md-6">
  <select name="city" class="cities order-alpha form-select" id="cityId">
    <option value="">Select City</option>
</select>
  </div> 
  <div className="divider py-1 bg-light mb-3"></div>
  <div className="col-12">
    <button onClick={frmSubmit} type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
</div>
        )
    }
export default Home;