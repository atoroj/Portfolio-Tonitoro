# 👨‍💻 Toni Toro - Portfolio

![Astro](https://img.shields.io/badge/astro-%232C205F.svg?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

> Mi rincón personal en la web. Un portafolio minimalista, multilingüe y de alto rendimiento construido con **Astro** para mostrar mi trayectoria en Ingeniería de Software e IA.

🔗 **Ver Demo:** [tonitoro.dev](https://tonitoro.dev)

---

## 🚀 Sobre el Proyecto

Este repositorio contiene el código fuente de mi portafolio personal.

### Características Clave
* 🌍 **Internacionalización (i18n):** Soporte nativo inglés/español mediante enrutamiento dinámico (`/[lang]/`).
* ⚡ **Middleware:** Gestión de redirecciones y detección de idioma preferido del usuario.
* 🧩 **Arquitectura Modular:** Secciones encapsuladas en componentes independientes (`About`, `Work`, `Projects`).
* 🎨 **Diseño Responsivo**

---

## 🛠️ Stack Tecnológico

* **Core:** [Astro 5](https://astro.build/)
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS
* **Despliegue:** Vercel

---

## 📂 Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar la escalabilidad y la gestión de idiomas:

```text
/
├── public/               # Assets estáticos
├── src/
│   ├── assets/           # Recursos optimizados (SVGs, Backgrounds)
│   ├── components/
│   │   ├── icons/        # Colección de iconos SVG
│   │   └── shared/       # Secciones modulares (About, Me, Work, Education)
│   ├── i18n/             # Lógica de traducción
│   │   ├── ui.ts         # Diccionarios de textos (Labels)
│   │   ├── utils.ts      # Funciones de utilidad para i18n
│   │   └── redirectToLang.ts
│   ├── layouts/          # Plantilla base (Layout.astro)
│   ├── pages/
│   │   └── [lang]/       # Enrutamiento dinámico (index.astro)
│   ├── styles/           # Hoja de estilos global
│   └── middleware.mjs    # Interceptación de peticiones e idioma
├── astro.config.mjs      # Configuración del framework
└── tsconfig.json         # Configuración de TypeScript
```
