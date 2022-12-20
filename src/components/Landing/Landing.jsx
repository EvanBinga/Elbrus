import './Landing.css';

function Landing () {
    return (
      <div className="Landing">
        <p className='banerText'>
          Оптовые поставки<br />
          минеральной воды<br />
          и безалкогольных напитков
        </p>
          <div className='baner'>
              <img className='grassOne' src="/images/grass2.png" alt='grassOne'></img>
              <img className='grassTwo' src="/images/grass1.png" alt='grassTwo'></img>
              <img className='grassTree' src="/images/grass3.png" alt='grassTree'></img>
              <img className='tarhun' src="/images/tarhun.png" alt='tarhun'></img>
              <div className="slide"></div>
            <div className="line"></div>
          </div>
          
      </div>
    );
  }
  
  export default Landing;