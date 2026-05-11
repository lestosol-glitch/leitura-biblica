export default async function handler(req, res) {
  const { year, month, day } = req.query;
  const url = `https://wol.jw.org/wol/dt/r5/lp-t/${year}/${month}/${day}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Falha ao buscar texto' });
  }
}
