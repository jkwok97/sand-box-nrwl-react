import { useRouter } from 'next/router';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import NewMeetupForm from 'apps/next-app/components/meetups/Meetup-Form/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    console.log(enteredMeetupData);

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
