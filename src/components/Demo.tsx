import { ReactElement, useEffect } from 'react';
import { useLog } from '../LogProvider';
import { HttpMethod, useRequest } from '../hooks/use-request.hook';

// import { IUser } from '../interfaces/user.interface';

const Demo = (): ReactElement<any, any> => {
  const [sendHttpRequest] = useRequest();
  const { setErrorMessage } = useLog();

  useEffect(() => {
    sendHttpRequest({
      url: '/users',
      method: HttpMethod.POST,
      body: {
        name: 'abc',
        username: 'abcd',
        email: 'abc@example.com',
      },
    })
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log(error);
        setErrorMessage(error.response.data.message);
      });
  }, []);

  return <p>Demo</p>;
};

export default Demo;
