# 🤝 Kit Infantil Multisensorial de Aprendizaje Pre-Braille

> Tecnología educativa inclusiva de bajo costo para el aprendizaje inicial del sistema Braille en niños con discapacidad visual.

**Universidad Politécnica Salesiana · Cuenca, Ecuador · 2024–2025**  
**Autora:** Ana Cristina Lozano Acosta  
**Tutora:** Ing. Paola Cristina Ingavélez Guerra, PhD.

---

## 📌 Descripción del proyecto

Kit educativo multisensorial compuesto por **dos recursos didácticos complementarios** diseñados para apoyar a niños con discapacidad visual en el aprendizaje inicial del sistema Braille. Integra estimulación táctil, auditiva y visual (para usuarios con baja visión), siguiendo el **modelo de aprendizaje experiencial de Kolb** y cumpliendo normativas nacionales e internacionales de accesibilidad y seguridad infantil.

---

## 🧩 Componentes del kit

### Recurso 1 — Alfabeto 3D con Braille y NFC
- 27 letras del alfabeto español impresas en **3D (PLA)** con relieve Braille según parámetros estándar ISO (puntos de 1.5 mm de diámetro, separación de 2.5 mm)
- Cada letra incorpora una **etiqueta NFC NTAG215** que redirige a una página web educativa accesible con audio y visuales por letra
- Página web desplegada en **Netlify**, vinculada a repositorio GitHub, validada con **WAVE y TAW (WCAG 2.0 AA)**
- Contraste de colores verificado: valores entre **10.07:1 y 21.00:1**, superando el mínimo requerido de 4.5:1

### Recurso 2 — Entrenador electrónico de 6 puntos Braille
- **Microcontrolador ESP32** con 6 pulsantes de enclavamiento que simulan una celda Braille
- **PCB diseñada en Altium Designer** (doble capa con antisolder), soldada manualmente
- Retroalimentación auditiva mediante **DFPlayer Mini + amplificador PAM8403 + parlante 4Ω/3W**
- **27 letras del alfabeto español** programadas en código binario Braille + 5 mensajes de error de voz
- Carcasa ergonómica impresa en 3D, diseñada para manipulación segura por niños con discapacidad visual
- Costo total de materiales: **~$104.82 USD**

---

## ⚙️ Stack tecnológico

| Área | Tecnologías |
|------|------------|
| Hardware | ESP32 · DFPlayer Mini · PCB Altium · PAM8403 · NFC NTAG215 |
| Firmware | Arduino IDE · C/C++ |
| Diseño 3D | Autodesk Inventor · Impresión 3D PLA |
| Web | HTML · CSS · JavaScript · Netlify |
| Validación web | WAVE · TAW · WebAIM · Coolors |

---

## 📁 Estructura del repositorio

```
├── recurso1-alfabeto-nfc/
│   ├── web/                  # HTML, CSS, JS de la página educativa
│   ├── audios/               # Archivos .mp3 por letra
│   └── imagenes/             # Archivos .webp por letra
├── recurso2-entrenador-braille/
│   ├── firmware/             # Código Arduino IDE (ESP32)
│   └── pcb/                  # Diseño Altium (esquemático + ruteo)
├── evaluacion/
│   ├── resultados-SUS.pdf    # Cuestionario y cálculos SUS
│   └── resultados-QUEST.pdf  # Cuestionario QUEST 2.0
├── documentacion/
│   └── tesis-completa.pdf    # Documento de titulación UPS 2025
└── README.md
```

---

## ✅ Resultados de validación

### Evaluación de usabilidad — SUS (System Usability Scale)
Aplicado a **4 adultos con deficiencia visual**:

| Usuario | Puntaje SUS |
|---------|-------------|
| Usuario 1 | 100.0 |
| Usuario 2 | 97.5 |
| Usuario 3 | 80.0 |
| Usuario 4 | 100.0 |
| **Media general** | **94.4 / 100** |

> Clasificación: **"Aceptable / Excelente"** según escala SUS (rango 91–100 = experiencia de usabilidad ideal).

### Evaluación de satisfacción — QUEST 2.0

| Usuario | Promedio QUEST |
|---------|---------------|
| Usuario 1 | 5.0 / 5.0 |
| Usuario 2 | 5.0 / 5.0 |
| Usuario 3 | 4.82 / 5.0 |
| Usuario 4 | 5.0 / 5.0 |
| **Promedio general** | **4.95 / 5.0** |

### Evaluación pedagógica — Modelo de Kolb
Evaluado por **2 expertas** (docente de educación especial + psicóloga especialista en inclusión):

| Fase Kolb | Promedio (escala 1–4) |
|-----------|----------------------|
| Experiencia concreta | 4.0 / 4.0 |
| Observación reflexiva | 4.0 / 4.0 |
| Conceptualización abstracta | 3.63 / 4.0 |
| Experimentación activa | 4.0 / 4.0 |
| **Valoración global** | **4.0 / 4.0** |

---

## 🔒 Normativas cumplidas

- **ISO 9999:2022** — Clasificación de productos de asistencia para personas con discapacidad
- **NTE ISO 8124-1/2/3** — Seguridad de juguetes (aspectos físicos, inflamabilidad, migración química)
- **IEC 62368-1:2020** — Seguridad eléctrica y electrónica (Dispositivo 2)
- **NTE INEN-ISO/IEC 40500 / WCAG 2.0 AA** — Accesibilidad web (contraste, navegación, lectores de pantalla)
- **Ley Orgánica de Discapacidades — Ecuador** — Derecho al acceso a tecnologías adaptadas

---

## 🌍 Contexto e impacto

En Ecuador, **954 niños menores de 12 años** están registrados oficialmente con discapacidad visual (CONADIS), de los cuales el 52.2% presenta discapacidad del 75–84%. En Cuenca, se registran **49 menores** con discapacidad visual. Los dispositivos electrónicos de apoyo al aprendizaje Braille superan los **$800 USD** en el mercado. Este kit ofrece una alternativa funcional y validada a **~$104.82 USD**, replicable con componentes disponibles en Ecuador y LATAM.

---

## 👩‍💻 Autora

**Ana Cristina Lozano Acosta** — Ingeniera Biomédica  
Universidad Politécnica Salesiana · Cuenca, Ecuador  
🔗 [linkedin.com/in/ac-lozano](https://linkedin.com/in/ac-lozano) · ✉️ lozanoana000@gmail.com

---

## 📄 Cita académica

> Lozano Acosta, A. C. (2025). *Kit Infantil Multisensorial de Aprendizaje Pre-Braille* [Proyecto de titulación, Ingeniería Biomédica]. Universidad Politécnica Salesiana, Cuenca, Ecuador.

---

---

## 🇬🇧 English Summary

**Multisensory Pre-Braille Learning Kit for Children with Visual Impairment**

A low-cost assistive technology kit developed as a biomedical engineering thesis at Universidad Politécnica Salesiana (Ecuador, 2025). Two complementary devices for pre-Braille skill development in visually impaired children.

**Device 1 — 3D Braille Alphabet with NFC:** 27 3D-printed PLA letters with Braille relief + NFC tags linking to an accessible educational website (WCAG 2.0 AA compliant, contrast ratios 10.07:1–21:1).

**Device 2 — Electronic 6-Dot Braille Trainer:** ESP32-based device with 6 latching push buttons, custom PCB (Altium Designer), DFPlayer Mini audio output, and 3D-printed ergonomic casing. All 27 Spanish alphabet letters programmed in binary Braille with audio feedback.

**Validation results:**
- SUS usability score: **94.4 / 100** (4 visually impaired adults)
- QUEST 2.0 satisfaction: **4.95 / 5.0**
- Pedagogical evaluation (Kolb model): **4.0 / 4.0** (2 special education experts)
- Total materials cost: **~$104.82 USD**

**Stack:** ESP32 · Arduino/C++ · Altium Designer · Autodesk Inventor · 3D Printing (PLA) · NFC NTAG215 · HTML/CSS/JS · Netlify
