import React,{useState} from "react";
import emailjs from "emailjs-com"
const Contact = () => {
  const mystyle={
   backgroundImage: "linear-gradient(to right,rgba(9,61,91,0.9),rgba(9,61,91,0.2))",
  }
  const backgroundColor={
    backgroundImage:"linear-gradient(to right,rgba(29,27,69,0.7),rgba(9,61,91,0.4))"
  }
  const social_inconvinence=()=>{
    alert("Sorry!!! System not available.. Please select Facebook or Whats up")
  }
  const a=new Date().toLocaleTimeString();
  const [time,setTime]=useState(a);
  const Update=()=>{
    const b=new Date().toLocaleTimeString();
    setTime(b);
  }
  setInterval(Update,1000);
  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_n5k1m0n', 'my_first_portfolio', e.target, 'user_DhNZJTZpgGUdofLJpuOQ4')
    .then(() => {
    alert("Your message has been submitted..");},(error) => {
        alert(error.message);
    });
    e.target.reset();
  }

  return (
    <>
    <div className="container">
      <div className="row mb-5">
        <div className=" text-center mt-4" style={{ color: "#ffffff" }}>
          <div className="">
            <h6 className=" py-0 font-monospace">How you connect ?? </h6>
            <h1 className="title fw-bolder">Contact</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-2">
          <div className="py-3 px-4 text-light rounded-3" style={backgroundColor}>
            <div className="row">
              <div className="p-2 mb-3 rounded-3" style={mystyle}>
                <div className="social_title_icon mx-auto">
                  <i className="fas fa-info-circle fa-3x"></i>
                </div>
                <div className="text-center">
                  <h3 className="fw-bolder">Social Profiles</h3>
                </div>
                <div className="">
                <div className="row d-flex justify-content-center">
                 
                  <div className="social_icon col-sm-2 mx-2">
                  <a href="https://www.facebook.com/xettree.kanxo" target="_blank"><i className="fab fa-facebook-f fa-2x"></i></a>                  
                   </div>
                  <div className="social_icon col-sm-2 mx-2" onClick={social_inconvinence}>
                  <a href=""><i className="fab fa-twitter fa-2x"></i></a>            
                  </div>
                  <div className="social_icon col-sm-2 mx-2">
                  <a href="https://wa.me/<9865818795>"> <i className="fab fa-whatsapp fa-2x"></i></a>
                  </div>
                  <div className="social_icon col-sm-2 mx-2">
                  <a href=""><i className="fab fa-instagram fa-2x" onClick={social_inconvinence}></i></a>                  
                  </div>
                  <div className="social_icon col-sm-2 mx-2">
                 <a href=""><i className="fab fa-linkedin-in fa-2x" onClick={social_inconvinence}></i></a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-light">
              <div className="col-lg-6 px-0">
              <div className="p-2 rounded-3 email_margin" style={mystyle}>
                <div className="social_title_icon mx-auto">
                <i className="fas fa-envelope fa-2x"></i>
                 </div>
                <div className="text-center">
                  <h3 className="fw-bolder">Email Me</h3>
                </div>
                <div className="text-center">
                  <h5 className="l fw-bolder">lalbahadurbc@gmail.com</h5>
                </div>
                </div>
              </div>
              <div className="col-lg-6 px-0">
              <div className="p-2 rounded-3" style={mystyle}>
                <div className="social_title_icon mx-auto">
                <i className="fas fa-phone fa-2x"></i>
                 </div>
                <div className="text-center">
                  <h3 className="fw-bolder">Contact Me</h3>
                </div>
                <div className="text-center">
                  <h5 className=" fw-bolder">+9779865818795</h5>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="rounded-3" style={backgroundColor}>
            <div className="row">
                <div className="px-4 py-3">
                  <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <input type="text" className="form-control text-center py-2 " id="FormControlInput1" name="name" placeholder="Enter your name"/>
                    </div>
                    <div className="mb-3">
                    <input type="email" className="form-control text-center py-2" id="FormControlInput2"  name="email"  placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control text-center py-2" id="FormControlInput3" name="subject"  placeholder="Enter subject" required />
                    </div>
                    <div className="mb-3">
                    <textarea className="form-control" id="FormControlTextarea1" rows="3"  name="message" placeholder="write Message" required ></textarea>
                    </div>
                    <div className="text-center  fs-3" >
                      <input type="Submit" value="Send message" className="send_message border-0 text-light fw-bolder rounded-3 py-2 px-3"style={{backgroundColor:"#093d5b"}}/>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
    <div className="mx-auto rounded-3 text-light my-2 get_in_touch d-flex align-items-center justify-content-center" style={mystyle}>
        <h3 className="fw-bolder .get_ani">{time}</h3>
      </div>
    </div>
    </div>
  
    </>
  );
};
export default Contact;
