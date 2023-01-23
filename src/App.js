import React from "react";
import "./style.css";

export default function App() {
  let msg = ""
  const fx1 = async (nro) => {
    try {
      if(nro === 1){
        return "Hecho el café"
      }
    } catch {
      return "La cafetera no funciona"
    }
  }

  return (
    <div>
      <Button
        onClick = {
          () => {
            msg = await fx1(1)
          }
        } 
      >
        Veamos guat japens - {msg}
      </Button>

    </div>
  );
}
