import clientPromise from './mongodb';

  export async function save(ip, ipData) {
    try {
      const client = await clientPromise;
      const db = client.db(process.env.MONGO_DB);
      await db.collection(process.env.MONGO_COLLECTION).insertOne({ ip, date: new Date(), city: ipData.city, country: ipData.country, region: ipData.region, name: ''});
      return true;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
