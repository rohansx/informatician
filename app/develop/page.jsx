import construct from '@/public/assets/error/construct.webp';
import './develop.css'
import Image from 'next/image';

const Develop = (props) => {
  return (
    <div className="container">
      <h1 style={{ fontSize: 40, fontWeight: 'bold' }} >Under Development</h1>
      <div className="image-container" style={{ color: props.theme === 'dark' ? 'black' : '' }}>
        <Image loading='lazy' src={construct} alt="a computer under construction with crane" className="development-image" width={300} height={200} />
      </div>
      <p style={{ fontSize: 20 }}>This page is currently under development. Please check back later.</p>
    </div>
  );
};

export default Develop;
