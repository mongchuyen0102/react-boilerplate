import { useLog } from '../LogProvider';

const ErrorMessage = (): any => {
  const { errorMessage } = useLog();
  return errorMessage !== '' && <p style={{ color: 'red' }}>{errorMessage}</p>;
};

export default ErrorMessage;
