import { MongoClient, ObjectId } from 'mongodb';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import MeetupDetails from 'apps/next-app/components/meetups/Meetup-Detail/MeetupDetail';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { MeetupDto } from 'apps/next-app/models';

interface MeetupDetailProps {
  meetupData: MeetupDto;
}

const MeetupDetail = (props: MeetupDetailProps) => {
  return (
    <MeetupDetails
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const connection =
    'mongodb+srv://jeff-tutorial:u8K9VRLyRQ3oToi8@cluster0.wjcwv.mongodb.net/meetups?retryWrites=true&w=majority';

  const client = await MongoClient.connect(connection);

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  // FETCH DATA FROM API

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  const connection =
    'mongodb+srv://jeff-tutorial:u8K9VRLyRQ3oToi8@cluster0.wjcwv.mongodb.net/meetups?retryWrites=true&w=majority';

  const client = await MongoClient.connect(connection);

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  console.log(selectedMeetup);

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}

export default MeetupDetail;
