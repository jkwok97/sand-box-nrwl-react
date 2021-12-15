import useHttp from '../../hooks/use-http';
import Section from '../UI/Section';
import TaskForm from './TaskForm';
import { RequestConfig } from '../../models';

const NewTask = (props: any) => {
  // const [isLoading, setIsLoading] = useState(false); MOVED TO USEHTTP HOOK
  // const [error, setError] = useState(null); MOVED TO USEHTTP HOOK

  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText: any, taskData: any) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText: any) => {
    const config: RequestConfig = {
      url: 'https://react-http-f028d-default-rtdb.firebaseio.com/tasks.json',
      headers: { 'Content-Type': 'application/json' },
      body: { text: taskText },
      method: 'POST',
    };

    sendTaskRequest(config, createTask.bind(null, taskText));

    // MOVED TO USEHTTP HOOK
    // setIsLoading(true);
    // setError(null);
    // try {
    //   const response = await fetch(
    //     'https://react-http-f028d-default-rtdb.firebaseio.com/tasks.json',
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({ text: taskText }),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error('Request failed!');
    //   }

    //   const data = await response.json();

    //   const generatedId = data.name; // firebase-specific => "name" contains generated id
    //   const createdTask = { id: generatedId, text: taskText };

    //   props.onAddTask(createdTask);

    // } catch (err: any) {
    //   setError(err.message || 'Something went wrong!');
    // }
    // setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
