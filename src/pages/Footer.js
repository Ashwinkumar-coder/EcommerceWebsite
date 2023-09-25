import React from "react";


function Footers()
{
    return ( <>

            <footer className="bg-dark text-white pt-5 pb-4" >
            <div className="container text-left">
            <div className="row justify-content-around text-centertext-start">
            <img src={require('./eco.jpg')} alt="card" width='100' height='100'></img>
            <div >
            <h4 className="fw-bold">For Products</h4>
            
            <p >Partner With Us</p>
            <p >Apps For You</p>
        
            </div>
            <div>
            <h4 className="fw-bold">For Enterprises</h4>
            <p >Ecommerce For Enterprise</p>
           
            </div>
            <div >
            <h4 className="fw-bold">Ecommerce</h4>
            
            <p>Phone: +1 (0) 000 0000 001</p>
<p>Email: yourmail@example.com</p>
<p>Address:1234 Street Name City, AA 99999</p>
            
        
            </div>
            <div name="Learn More" >
            <h4 className="fw-bold">Learn More</h4>
            <nav>
            
            <p >Privacy</p>
            
            <p >Security</p>
           
            <p >Terms</p>
            </nav>
            </div>
            <div>
            <h4 className="fw-bold">Follow Us</h4>
            <i class="bi bi-instagram me-2"></i> <i class="bi bi-facebook me-2"></i> <i class="bi bi-twitter me-2"></i> <i class="bi bi-youtube me-2" ></i>
            </div>
            
            
            </div>
            </div>
            
            </footer>
            </>

    )
}
export default Footers;