export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const apiKey = config.public.openWeatherApiKey
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=${apiKey}&units=metric&lang=et`
    const res = await fetch(url)
    const data = await res.json()
  
    return data
  })
  