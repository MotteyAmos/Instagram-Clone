
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { FaFacebookSquare } from "react-icons/fa";
import googlePlay from "./assets/googlePlay.png";
import microsoft from "./assets/microsoft.png";

export default function App() {
  return (
    <>

      <div className='container mh-100 vh-100'>
        <div className="container position-absolute mw-100 w-25 instagram-card">
          <div className="card mw-100 w-100 text-center" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title form-title">Instagram</h5>
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
      <footer className="container">
        <ol>
          <li><a href="#">Meta</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Top accounts</a></li>
          <li><a href="#">Locations</a></li>
          <li><a href="#">Instagram Lite</a></li>
          <li><a href="#">Contact uploading and non-users</a></li>
          <li><a href="#">Meta Verified</a></li>
          <li>
            <select class="form-select select" aria-label="Default select example ">
              <option selected>English(UK)</option>
              <option value="Dask">Dask</option>
              <option value="Suomi">Suomi</option>
              <option value="Portugues(Brasil)">Portugues(Brasil)</option>
              <option value="Dansk">Dansk</option>
              <option value="Afrikaans">Afrkaans</option>
              <option value="Deutsch">Cestina</option>
              <option value="Espanol">Espanol</option>
              <option value="Bahasa Melayu">Bahasa Melayu</option>
              <option value="Portugues(Brasil)">Portugues (Brasil)</option>
              <option value="Portugues(Portugal)">Portugues(Portugal)</option>
            </select>
          </li>
          <li>	<a href="#"> &#169; 2023 Instagram from Meta</a></li>



        </ol>
      </footer>

    </>
  )
}