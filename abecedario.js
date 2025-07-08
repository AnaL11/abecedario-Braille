const letras = [
  {
    id: "a",
    etiqueta: "A",
    color: "#ff6347",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/ABraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/a.mp3"
  },
  {
    id: "b",
    etiqueta: "B",
    color: "#4169e1",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/BBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/b.mp3"
  },
  {
    id: "c",
    etiqueta: "C",
    color: "#32cd32",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/CBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/c.mp3"
  },
  {
    id: "d",
    etiqueta: "D",
    color: "#ff1493",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/DBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/d.mp3"
  },
  {
    id: "e",
    etiqueta: "E",
    color: "#ffd700",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/EBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/e.mp3"
  },
  {
    id: "f",
    etiqueta: "F",
    color: "#9370db",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/FBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/f.mp3"
  },
  {
    id: "g",
    etiqueta: "G",
    color: "#ff4500",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/GBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/g.mp3"
  },
  {
    id: "h",
    etiqueta: "H",
    color: "#20b2aa",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/HBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/h.mp3"
  },
  {
    id: "i",
    etiqueta: "I",
    color: "#ffa500",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/IBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/i.mp3"
  },
  {
    id: "j",
    etiqueta: "J",
    color: "#8b4513",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/JBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/j.mp3"
  },
  {
    id: "k",
    etiqueta: "K",
    color: "#4682b4",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/KBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/k.mp3"
  },
  {
    id: "l",
    etiqueta: "L",
    color: "#dc143c",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/LBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/l.mp3"
  },
  {
    id: "m",
    etiqueta: "M",
    color: "#228b22",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/MBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/m.mp3"
  },
  {
    id: "n",
    etiqueta: "N",
    color: "#b8860b",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/NBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/n.mp3"
  },
  {
    id: "ñ",
    etiqueta: "Ñ",
    color: "#deb887",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/ÑBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/ñ.mp3"
  },
  {
    id: "o",
    etiqueta: "O",
    color: "#00ced1",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/OBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/o.mp3"
  },
  {
    id: "p",
    etiqueta: "P",
    color: "#9932cc",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/PBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/p.mp3"
  },
  {
    id: "q",
    etiqueta: "Q",
    color: "#ff8c00",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/QBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/q.mp3"
  },
  {
    id: "r",
    etiqueta: "R",
    color: "#e9967a",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/RBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/r.mp3"
  },
  {
    id: "s",
    etiqueta: "S",
    color: "#00fa9a",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/SBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/s.mp3"
  },
  {
    id: "t",
    etiqueta: "T",
    color: "#191970",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/TBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/t.mp3"
  },
  {
    id: "u",
    etiqueta: "U",
    color: "#ffb6c1",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/UBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/u.mp3"
  },
  {
    id: "v",
    etiqueta: "V",
    color: "#2e8b57",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/VBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/v.mp3"
  },
  {
    id: "w",
    etiqueta: "W",
    color: "#8a2be2",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/WBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/w.mp3"
  },
  {
    id: "x",
    etiqueta: "X",
    color: "#deb887",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/XBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/x.mp3"
  },
  {
    id: "y",
    etiqueta: "Y",
    color: "#00bfff",
    imagen: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/imagenes/YBraille.png",
    audio: "https://raw.githubusercontent.com/AnaL11/abecedario-Braille/main/audio/y.mp3"
  },
  {
    id: "z",
    etiqueta: "Z",
    color: "#a0522d",
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
}

window.addEventListener('DOMContentLoaded', () => {
  const id = getLetterFromQuery();
  renderLetra(id);
});
