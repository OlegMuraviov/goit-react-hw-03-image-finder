import s from './Loader.module.css';
import { Oval } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className={s.wrap}>
      <Oval height="100" width="100" color="red" ariaLabel="loading" />
    </div>
  );
};
export default Loader;
