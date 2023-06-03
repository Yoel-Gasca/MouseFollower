import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })

  //Suscribe a los eventos cuando se disponga
  useEffect(() => {
    console.log('effect', { enabled });

    // Da seguimiento a la posición del puntero
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition ({ x: clientX, y: clientY});
    };

    //Habilida el evento que permite seguir al puntero
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    };

    // Limpia la ejecucion del evento lo que permite desabilitar el seguimiento del puntero
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };

  }, [enabled]); 
  
  return (
   <>
    <main>
        <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        />
        <h3>Proyecto 3</h3>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} Seguir puntero
        </button>
      </main>
    </>
  )
}
function App() {
  const [mounted, setMounted] = useState(true);

  return (
    <main>
       <FollowMouse />
    </main>
  );
};

export default App
