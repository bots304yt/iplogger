import { save } from "../../lib/MongoUtils";

export default async function handler(req, res) {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  const resp = await fetch(`https://ipinfo.io/${clientIp}?token=${process.env.IPINFO_TOKEN}`)
  const json = await resp.json()

  await save(clientIp, json);
  res.status(200).json({ success: true });
}
