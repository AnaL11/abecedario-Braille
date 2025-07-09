const letras = [
  {
    id: "a",
    etiqueta: "A",
    color: "#000000",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/ABraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/a.mp3"
  },
  {
    id: "b",
    etiqueta: "B",
    color: "#003366",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/BBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/b.mp3"
  },
  {
    id: "c",
    etiqueta: "C",
    color: "#4B2E2E",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/CBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/c.mp3"
  },
  {
    id: "d",
    etiqueta: "D",
    color: "#800020",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/DBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/d.mp3"
  },
  {
    id: "e",
    etiqueta: "E",
    color: "#004D00",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/EBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/e.mp3"
  },
  {
    id: "f",
    etiqueta: "F",
    color: "#004747",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/FBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/f.mp3"
  },
  {
    id: "g",
    etiqueta: "G",
    color: "#301934",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/GBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/g.mp3"
  },
  {
    id: "h",
    etiqueta: "H",
    color: "#333333",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/HBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/h.mp3"
  },
  {
    id: "i",
    etiqueta: "I",
    color: "#191970",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/IBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/i.mp3"
  },
  {
    id: "j",
    etiqueta: "J",
    color: "#004953",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/JBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/j.mp3"
  },
  {
    id: "k",
    etiqueta: "K",
    color: "#002147",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/KBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/k.mp3"
  },
  {
    id: "l",
    etiqueta: "L",
    color: "#8B0000",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/LBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/l.mp3"
  },
  {
    id: "m",
    etiqueta: "M",
    color: "#2A4646",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/MBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/m.mp3"
  },
  {
    id: "n",
    etiqueta: "N",
    color: "#563B2F",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/NBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/n.mp3"
  },
  {
    id: "ñ",
    etiqueta: "Ñ",
    color: "#38471F",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/ÑBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/ñ.mp3"
  },
  {
    id: "o",
    etiqueta: "O",
    color: "#183D3D",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/OBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/o.mp3"
  },
  {
    id: "p",
    etiqueta: "P",
    color: "#1A1A68",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/PBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/p.mp3"
  },
  {
    id: "q",
    etiqueta: "Q",
    color: "#7C0A02",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/QBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/q.mp3"
  },
  {
    id: "r",
    etiqueta: "R",
    color: "#381819",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/RBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/r.mp3"
  },
  {
    id: "s",
    etiqueta: "S",
    color: "#2A3D66",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/SBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/s.mp3"
  },
  {
    id: "t",
    etiqueta: "T",
    color: "#4B0082",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/TBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/t.mp3"
  },
  {
    id: "u",
    etiqueta: "U",
    color: "#014421",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/UBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/u.mp3"
  },
  {
    id: "v",
    etiqueta: "V",
    color: "#003B8F",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/VBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/v.mp3"
  },
  {
    id: "w",
    etiqueta: "W",
    color: "#25455F",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/WBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/w.mp3"
  },
  {
    id: "x",
    etiqueta: "X",
    color: "#6A0D0D",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/XBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/x.mp3"
  },
  {
    id: "y",
    etiqueta: "Y",
    color: "#004475",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/YBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/y.mp3"
  },
  {
    id: "z",
    etiqueta: "Z",
    color: "#1B4D3E",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/ZBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/z.mp3"
  }
];


function getLetterFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const letra = params.get('letra');
  if (letra && /^[a-zñ]$/i.test(letra)) { // acepta letras de la a a la z y la ñ (mayúsculas y minúsculas)
    return letra.toLowerCase();
  }
  return "a";
}

function renderLetra(id) {
  const data = letras.find(l => l.id === id);

  console.log(`Datos de la letra:`, data);
  document.getElementById('letter-name').style.color = data.color;
  document.getElementById('letter-name').textContent = data.etiqueta;
  document.getElementById('braille-img').src = data.imagen;
  document.getElementById('braille-img').alt = `${data.etiqueta} en Braille`;
  document.getElementById('audio-src').src = data.audio;
  document.getElementById('audio').load();
  document.querySelector('.play-button').setAttribute('aria-label', `Reproducir audio de la letra ${data.etiqueta}`);

}

window.addEventListener('DOMContentLoaded', () => {
  const id = getLetterFromQuery();
  renderLetra(id);
});
