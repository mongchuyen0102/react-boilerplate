import axios from 'axios';
import { ReactElement, useEffect } from 'react';
import { useLog } from '../LogProvider';

const Demo = (): ReactElement<any, any> => {
  const { setErrorMessage } = useLog();

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/user',
    })
      .then((res) => {
        console.log('res: ' + JSON.stringify(res));
        setErrorMessage('');
      })
      .catch((error) => {
        console.log('error: ' + JSON.stringify(error));
        setErrorMessage(error.message);
      });
  }, []);

  return <p>Demo</p>;
};

export default Demo;
