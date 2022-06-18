import { useState, createContext } from "react";
import { calcularMarca, obtenerDiferenciaYear, calcularPlan, formatearDinero } from "../helpers";
const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const cotizarSeguro = () => {
    
    let resultado = 2000;

    const diferencia = obtenerDiferenciaYear(datos.year);
  
    resultado -= ((diferencia * 3) * resultado) / 100;
 
    resultado *= calcularMarca(datos.marca)

    resultado *= calcularPlan(datos.plan)

    resultado = formatearDinero(resultado)

    setCargando(true);
    setTimeout(() => {
      setCargando(false)
    }, 3000);
    setResultado(resultado)
  };

  const handleChangeDatos = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  return (
    <CotizadorContext.Provider
      value={{ datos, handleChangeDatos, error, setError, cotizarSeguro , resultado, cargando}}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
