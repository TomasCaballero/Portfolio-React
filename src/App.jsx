import { useEffect, useState } from 'react';
import './App.css';
import Estudios from './Components/Estudios';
import Inicio from './Components/Inicio';
import Navbar from './Components/Navbar';
import Sitios from './Components/Sitios';
import Skills from './Components/Skills';
import SobreMi from './Components/SobreMi';
import PaginaCarga from './Components/PaginaCarga';

function App() {
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState('');
  // const [imagenesCargadas, setImagenesCargadas] = useState(false);

  useEffect(() => {
    const cargarPortfolio = async () => {
      try {
        await cargarInicio();
        await cargarSobreMi();
        await cargarSkills();
        await cargarSitios();
        await cargarEstudios();

        setCargando(false);
      } catch (error) {
        setErrores(error.message);
        console.log(errores);
      }
    };

    cargarPortfolio();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Funciones de carga progresiva de cada sección
  const cargarInicio = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 400);
    });
  };

  const cargarSobreMi = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 400);
    });
  };

  const cargarSkills = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 400);
    });
  };

  const cargarSitios = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 400);
    });
  };

  const cargarEstudios = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 400);
    });
  };

  return (
    <>
      <body>
        <div className="portfolio">
          {errores !== '' ? (
            <div>
              Ha habido un error al cargar la página <strong>({errores})</strong>
            </div>
          ) : cargando ? (
            <PaginaCarga />
          ) : (
            <>
              <Navbar />
              <main data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example">
                <Inicio />
                  <>
                    <SobreMi />
                    <Skills />
                    <Sitios />
                    <Estudios />
                  </>
              </main>
            </>
          )}
        </div>
      </body>
    </>
  );
}

export default App;



// import { useEffect, useState } from 'react';
// import './App.css';
// import Estudios from './Components/Estudios';
// import Inicio from './Components/Inicio';
// import Navbar from './Components/Navbar';
// import Sitios from './Components/Sitios';
// import Skills from './Components/Skills';
// import SobreMi from './Components/SobreMi';
// import PaginaCarga from './Components/PaginaCarga';

// function App() {
//   const [cargando, setCargando] = useState(true);
//   const [errores, setErrores] = useState('');
//   const [imagenesCargadas, setImagenesCargadas] = useState(false);

//   useEffect(() => {
//     const cargarPortfolio = async () => {
//       try {
//         await cargarInicio();
//         await cargarSobreMi();
//         await cargarSkills();
//         await cargarSitios();
//         await cargarEstudios();

//         setCargando(false);
//       } catch (error) {
//         setErrores(error.message);
//         console.log(errores);
//       }
//     };

//     cargarPortfolio();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Funciones de carga progresiva de cada sección
//   const cargarInicio = () => {
//     return new Promise((resolve) => {
//       const imagen = new Image();
//       imagen.src = 'src/assets/bg/liviana.webp';
//       imagen.onload = () => {
//         setImagenesCargadas(true);
//         resolve();
//       };
//     });
//   };

//   const cargarSobreMi = () => {
//     return new Promise((resolve) => {
//       setTimeout(resolve, 750);
//     });
//   };

//   const cargarSkills = () => {
//     return new Promise((resolve) => {
//       setTimeout(resolve, 750);
//     });
//   };

//   const cargarSitios = () => {
//     return new Promise((resolve) => {
//       setTimeout(resolve, 750);
//     });
//   };

//   const cargarEstudios = () => {
//     return new Promise((resolve) => {
//       setTimeout(resolve, 750);
//     });
//   };

//   return (
//     <>
//       <body>
//         <div className="portfolio">
//           {errores !== '' ? (
//             <div>
//               Ha habido un error al cargar la página <strong>({errores})</strong>
//             </div>
//           ) : cargando ? (
//             <PaginaCarga />
//           ) : (
//             <>
//               <Navbar />
//               <main data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example">
//                 <Inicio />
//                 {imagenesCargadas &&(
//                   <>
//                     <SobreMi data-aos="zoom-in-right" />
//                     <Skills data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" />
//                     <Sitios data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" />
//                     <Estudios data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" />
//                   </>
//                 )}
//               </main>
//             </>
//           )}
//         </div>
//       </body>
//     </>
//   );
// }

// export default App;
