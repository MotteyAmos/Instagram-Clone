
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { FaFacebookSquare } from "react-icons/fa";
import googlePlay from "./assets/googlePlay.png";
import microsoft from "./assets/microsoft.png";
import instagramTitle from "./assets/instagram_title.jpg";
import Footer from './assets/components/footer';

export default function App() {
  return (
    <>

      <div className='container mh-100 vh-100'>
        <div className="container position-absolute mw-100 w-25 instagram-card">
          <div className="card mw-100 w-100 text-center" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title form-title">
                <img src={instagramTitle} alt="instagram Title" />
              </h5>
              <form >
                <div className='container position-relative  form-container' >
                  <input type="text" placeholder='Phone number, username or email address' className="text-muted border" />
                  <input type="password" placeholder="Password" className="text-muted border" />
                  <button type="submit" className="btn submit-btn ">Log in</button>
                  <div className="position-relative">
                    <p className="or text-muted">OR</p>
                  </div>
                  <div className='facebookLogIn '>
                    <a href="#"><FaFacebookSquare className="icon" /><span>Log in with Facebook</span> </a>
                    <p className="forgettenPassword">
                      <a href="#">Forgtten your password?</a>
                    </p>
                  </div>

                </div>

              </form>

            </div>
          </div>
          <div className="card mt-3 sign-up">
            <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
          <p className="getApp">Get the app.</p>
          <div className="googlePlay_microsoft">
            <a href="#">
              <img src={googlePlay} className="googplay" alt="google play" />
            </a>
            <a href="#">
            <img src={microsoft} alt="microsoft" />
            </a>
          </div>
        </div>

      </div>
      
      <Footer/>
    </>
  )
}