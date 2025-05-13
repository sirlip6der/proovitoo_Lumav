# Proovitöö (Front-End): Magento + Alokai + Ilmateade

## 👋 Sissejuhatus

Selles proovitöös panin püsti Vue Storefront 2 (Alokai OS) arenduskeskkonna ja lõin ilmaandmete kuvamise funktsionaalsuse. Eesmärk oli katsetada uue tehnoloogia omandamist, kasutada AI tööriista töö kiirendamiseks ning järgida häid arendus- ja koostööpõhimõtteid.

---

## 📌 Eesmärk

Luua Nuxt 3 (Alokai / Vue Storefront 2) front-end, mis:
- Kuvab Tallinna jooksva ilma OpenWeather API põhjal
- Muudab disaini sõltuvalt ilmast
- Kasutab `.env` failist API võtit
- On versioonihalduses ja dokumenteeritud

---

## ⚙️ Kasutatud tehnoloogiad

- **Nuxt 3** (Vue Storefront 2 / Alokai)
- **TailwindCSS** (via `@nuxtjs/tailwindcss`)
- **OpenWeatherMap API**
- **.env + useRuntimeConfig()**
- **AI tugi:** ChatGPT

---

## 🚀 Kuidas projekti käivitada

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

4. Käivita arenduskeskkond:
```bash
npm run dev
```

5. Ava:
[http://localhost:3000](http://localhost:3000)

---

## 🌦️ Funktsionaalsus

- Kuvab jooksva ilma Tallinna kohta (kirjeldus + temperatuur)
- Visuaalne taust muutub vastavalt ilmastikule:
  - *Selge*: kollane
  - *Pilves*: hall
  - *Vihmane*: sinine
- Kujundus tehtud TailwindCSS abil
- API võti on `.env` failis (turvaline)

---

## 🤖 Kasutatud AI promptid

AI abil sain kiiremini ja täpsemalt liikuda järgmistes osades:

**Prompt 1:**  
*Kuidas Nuxt 3 projektis fetchida OpenWeatherMap andmeid Composition API kaudu?*  
→ Vue 3 + Composition API + `ref`, `onMounted`, `fetch`.

**Prompt 2:**  
*Kuidas lisada TailwindCSS Nuxt 3 projektile ilma `npx tailwindcss init` käsuta?*  
→ Lahendus oli `@nuxtjs/tailwindcss`.

**Prompt 3:**  
*Kuidas kasutada `.env` muutujat Nuxt 3-s ja saada see komponendi sees kätte?*  
→ `useRuntimeConfig()` + `runtimeConfig.public` lahendus.

---

## 🧠 Esinenud probleemid ja lahendused

| Probleem                           | Lahendus                                              |
|------------------------------------|-------------------------------------------------------|
| `npx tailwindcss init` ei töötanud | Kasutatud Nuxt moodulit `@nuxtjs/tailwindcss`        |
| API võti ei laetud                 | `.env` + `useRuntimeConfig()` abil lahendatud        |
| Fetch ei töötanud (`template literal`) | Parandatud URLi süntaks backtick’idega (`)      |
| Andmeid ei kuvatud                | `console.log()` abil selgitati välja API vastus      |

---

## 📁 Kaustastruktuur

```
alokai-frontend/
├── components/
│   └── Weather.vue
├── pages/
│   └── index.vue
├── nuxt.config.ts
├── .env           # ainult lokaalselt, ignoreeritud GitHubis
├── .gitignore     # sisaldab .env kirjet
└── README.md      # see fail
```

---

## ✅ Tehtud ja valmis esitamiseks

- [x] Vue Storefront 2 töötab lokaalselt
- [x] Ilmaandmed kuvatakse API abil
- [x] Kujundus reageerib ilmale
- [x] Kood on GitHubis ja versioonihalduses
- [x] AI kasutus ja probleemilahendus dokumenteeritud

---

## 👤 Autor

**Nimi:** Sirli Põder  
**GitHub:** [@sirlip6der](https://github.com/sirlip6der)  
**Aasta:** 2025 – Front-End suuna proovitöö
