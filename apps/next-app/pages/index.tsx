import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

import MeetupList from '../components/meetups/Meetup-List/MeetupList';
import { MeetupDto } from '../models';

interface HomePageProps {
  meetups: MeetupDto[];
}

const HomePage = (props: HomePageProps) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  );
};

// USE IF YOU NEED ACCESS TO REQUEST AND RESPONSE
// WILL RUN EVERYTIME PAGE LOADS SO GOOD IF DATA IS BEING CHANGE MULITPLE TIME A SECOND
// WILL BE SLOWER BECAUSE IT NEEDS TO WAIT FOR A RESPONSE EVERYTIME

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// THIS IS FASTER AND WILL CACHE DATA

export async function getStaticProps() {
  //THIS DOES NOT WORK ANYMORE, CHANGED USER & PASSWORD
  const connection =
    'mongodb+srv://jeff-tutorial:u8K9VRLyRQ3oToi8@cluster0.wjcwv.mongodb.net/meetups?retryWrites=true&w=majority';

  const client = await MongoClient.connect(connection);

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
        description: meetup.description,
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
