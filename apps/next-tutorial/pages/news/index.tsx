import { Fragment } from 'react';
import Link from 'next/link';

const News = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="news/1">Mandalorian Origin</Link>
        </li>
        <li>
          <Link href="news/2">Spider-man Origin</Link>
        </li>
        <li>
          <Link href="news/3">Daredevil Origin</Link>
        </li>
        <li>
          <Link href="news/4">Captain America Origin</Link>
        </li>
        <li>
          <Link href="news/5">Thor Origin</Link>
        </li>
        <li>
          <Link href="news/6">She-hulk Origin</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;
