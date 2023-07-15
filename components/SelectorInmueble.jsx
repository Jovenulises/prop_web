import { useState } from 'react';
import Filter from './Filter';
import Inmueble from './Inmueble';

function ComponentePadre() {
  const [inmueblesMostrados, setInmueblesMostrados] = useState(inmuebles);

  return (
    <>
      <Filter setInmueblesMostrados={setInmueblesMostrados} />
      <Inmueble inmuebles={inmueblesMostrados} />
    </>
  );
}

export default ComponentePadre;
