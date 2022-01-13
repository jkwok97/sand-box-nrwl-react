// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { MeetupDto } from 'apps/next-app/models';
import MeetupItem from '../Meetup-Item/MeetupItem';
import classes from './MeetupList.module.css';

interface MeetupListProps {
  meetups: MeetupDto[];
}

const MeetupList = (props: MeetupListProps) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup: MeetupDto) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
