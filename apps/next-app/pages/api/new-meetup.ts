import { MongoClient } from 'mongodb';

// /api/new-meetup

const connection =
  'mongodb+srv://jeff-tutorial:u8K9VRLyRQ3oToi8@cluster0.wjcwv.mongodb.net/meetups?retryWrites=true&w=majority';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(connection);

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup Inserted' });
  }
};

export default handler;
