import { Fragment, useEffect, useState } from 'react';
import NewTask from '../components/NewTask/NewTask';
import Tasks from '../components/Tasks/Tasks';
import useHttp from '../hooks/use-http';
import styles from './app.module.css';

export function App() {
  // const [isLoading, setIsLoading] = useState(false); MOVED TO USEHTTP HOOK
  // const [error, setError] = useState(null); MOVED TO USEHTTP HOOK
  const [tasks, setTasks] = useState<any>([]);

  const config = {
    url: 'https://react-http-f028d-default-rtdb.firebaseio.com/tasks.json',
  };

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  // MOVED TO USEHTTP HOOK
  // const fetchTasks = async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://react-http-f028d-default-rtdb.firebaseio.com/tasks.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (err: any) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    const transformTasks = (tasksObj: any) => {
      const loadedTasks = [];
  
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
  
      setTasks(loadedTasks);
    };

    fetchTasks(config, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task: any) => {
    setTasks((prevTasks: any) => prevTasks.concat(task));
  };

  return (
    <Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </Fragment>
  );
}

export default App;
