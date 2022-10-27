import { useLog } from '../LogProvider';

const ErrorMessage = (): any => {
  const { errorMessage } = useLog();
  return (
    Boolean(errorMessage) && <p style={{ color: 'red' }}>{errorMessage}</p>
  );
};

export default ErrorMessage;
