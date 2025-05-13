# Proovitöö (Front-End): Magento + Alokai + Ilmateade

## 📌 Eesmärk

Luua Vue Storefront 2 (Alokai OS) arenduskeskkond, mis kuvab jooksva ilma (nt Tallinn) OpenWeather API abil. Visuaalne disain muutub sõltuvalt ilmastikuoludest. Projekt vastab proovitöö juhendile.

---

## ⚙️ Kasutatud tehnoloogiad

- Nuxt 3 (Alokai / Vue Storefront 2)
- TailwindCSS (via @nuxtjs/tailwindcss)
- OpenWeatherMap API
- .env + useRuntimeConfig()
- AI tööriist: ChatGPT (OpenAI)

---

## 🚀 Kuidas tööle panna

1. Klooni repo:
```bash
git clone https://github.com/sirlip6der/magento-alokai-demo.git
cd alokai-frontend
```

2. Paigalda sõltuvused:
```bash
npm install
```

3. Loo `.env` fail ja lisa:
```
OPENWEATHER_API_KEY=siia_sinu_api_voti
```

4. Käivita arendusserver:
```bash
npm run dev
```

5. Ava leht:
[http://localhost:3000](http://localhost:3000)

---

## 🌦️ Funktsionaalsus

- Kuvab jooksva ilma Tallinna kohta (kirjeldus + temperatuur)
- Disain muutub vastavalt ilma tüübile (`clear`, `rain`, `cloud`)
- Kasutatud TailwindCSS klassid kujundamiseks
- API võti on `.env` failis, mitte koodis

---

## 🤖 Kasutatud AI prompt’id

**Prompt 1:**  
„Kuidas Nuxt 3 projektis fetchida OpenWeatherMap andmeid Composition API kaudu?“  
→ Kasutati, et mõista `ref`, `onMounted`, `fetch` loogikat Vue 3-s.

**Prompt 2:**  
„Kuidas lisada TailwindCSS Nuxt 3 projektile ilma `npx tailwindcss init` käsuta?“  
→ Lahendus: kasutada `@nuxtjs/tailwindcss` moodulit.

**Prompt 3:**  
„Kuidas kasutada `.env` muutujat Nuxt 3-s ja saada see komponendi sees kätte?“  
→ Kasutati `useRuntimeConfig()` + `runtimeConfig` lahendust.

---

## 🧠 Esinenud probleemid ja lahendused

| Probleem                          | Lahendus                                           |
|-----------------------------------|----------------------------------------------------|
| `npx tailwindcss init` ei töötanud | Kasutati `@nuxtjs/tailwindcss` moodulit             |
| API võti ei laetud                | Kasutati `useRuntimeConfig()` + `.env`             |
| Fetch ei töötanud                 | Parandatud backtick (`) süntaks URL-is              |
| Andmeid ei kuvatud                | `console.log` abil selgitati välja API vastus      |

---

## 🗂️ Kaustastruktuur

```
alokai-frontend/
├── components/
│   └── Weather.vue
├── pages/
│   └── index.vue
├── nuxt.config.ts
├── .env          # ainult lokaalselt, ignoreeritud GitHubis
├── .gitignore    # sisaldab .env kirjet
└── README.md     # see fail
```

---

## ✅ Tehtud

- [x] Vue Storefront 2 töötab
- [x] Ilmateade kuvatakse OpenWeather API abil
- [x] Kujundus muutub sõltuvalt ilmast
- [x] Versioonihaldus GitHubis
- [x] .env kasutusel, mitte kõvakodeeritud
- [x] README sisaldab AI kasutust ja probleeme

---

© 2025 – Proovitöö kandidaat  
Autor: Sirli Põder GitHub:@sirlip6der

