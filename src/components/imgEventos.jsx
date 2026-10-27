import { useState } from "react";
import "./carrosselPratos.css";

const pratos = [
  "/eventos06.jpg",
  "/eventos07.jpg",
 "/prato11.jpg"
];

export default function IMGeventos() {
  const [indice, setIndice] = useState(0);

  const anterior = () => {
    setIndice((atual) =>
      (atual - 1 + pratos.length) % pratos.length
    );
  };

  const seguinte = () => {
    setIndice((atual) =>
      (atual + 1) % pratos.length
    );
  };

  return (
    <div className="carrosselPratos">
      <button
        className="setaPrato esquerda"
        onClick={anterior}
        aria-label="Ver prato anterior"
      >
        &#10094;
      </button>

      <img
        src={pratos[indice]}
        alt={`Prato ${indice + 1} da Flavors by Oyinda`}
        className="imagemCarrossel"
      />

      <button
        className="setaPrato direita"
        onClick={seguinte}
        aria-label="Ver próximo prato"
      >
        &#10095;
      </button>

      <p className="contadorPratos">
        {indice + 1} / {pratos.length}
      </p>

    </div>
  );
}
