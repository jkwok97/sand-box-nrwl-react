import { useRouter } from 'next/router';

const NewsDetail = () => {
  const router = useRouter();

  const id = router.query.newsId;

  console.log(id);

  return <h1>The News Detail Page</h1>;
};

export default NewsDetail;
