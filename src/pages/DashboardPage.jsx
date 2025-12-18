import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function DashboardPage() {
  const { authenticated } = useAuth();
  const navigate = useNavigate();
  //const { userData: decks, reloadUserData } = useUserData();

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, [authenticated, navigate]);

  return (
    <>  olá</>
    
  );
}
