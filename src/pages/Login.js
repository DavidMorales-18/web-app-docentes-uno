import {useEffect,  useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import background from "../img/ups.jpg";



function Login() {
  const [email, setEmail] = useState("");
 const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        let elem = await supabase.auth.signInWithOtp({
            email
        });
        console.log(elem)
    } catch (error) {

        console.log(error)
        
    }
  };

  useEffect(() => {
    if (supabase.auth.getUser()) {
      navigate("/");
    }
    console.log("called");
  }, [navigate]);


  return (
    <div className="row p-4"style={{ backgroundImage: `url(${background})` }}> 
      <div className="col-md-4 offset-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
          <label htmlFor="email">Escribe tu email:</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-2"
            placeholder="ups@ups.edu.ec"
            required
          />
          <div>
            <button >Ingresar</button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
