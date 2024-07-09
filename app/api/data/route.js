export async function POST() {
  const res = await fetch(
    "https://www.sport.de/rugby/te129275/rk-03-berlin/spiele-und-ergebnisse/",
    {
      method: "GET",
    }
  )
    .then((result) => result.text().then())
    .then((text) => {
      return text;
    });

  return new Response(JSON.stringify(res));
}
