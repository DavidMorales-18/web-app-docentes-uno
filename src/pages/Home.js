import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { supabase } from "../supabase/client";
import background from "../img/ups.jpg";

function Home() {
  const navigate = useNavigate();


  useEffect(() => {
    if (!supabase.auth.getUser()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      Administrador App Cafilicación de docentes.
      <button onClick={()=>supabase.auth.signOut()}>Salir</button>
      <TaskForm/>
    </div>
    
  );
}

export default Home;
