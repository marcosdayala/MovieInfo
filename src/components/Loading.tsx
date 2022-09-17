import { useLocation } from 'react-router';
import '../styles_sheets/Loading.css';

export default function Loading() {
  const location = useLocation();
  return (
    <div style={location.pathname === '/' ? { marginTop: '50px' } : { marginTop: '0px' }} className='loader'></div>
  );
}