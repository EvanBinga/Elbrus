import './Header.css';

function Header () {
    return (
      <div className="Header">
                <h5>Эльбрусская<br />
                    Прохлада
                </h5>
                <nav>
                    <ul>
                        <li>
                            Главная
                        </li>
                        <li>
                            Каталог
                        </li>
                        <li>
                            Как заказать
                        </li>
                        <li>
                            Отзывы
                        </li>
                        <li>
                            О нас
                        </li>
                        <li>
                            Контакты
                        </li>
                    </ul>
                </nav>
                <p className='number'>+7 928 076 14 98</p>
                <button className='form'>Заказать обратный звонок</button>
      </div>
    );
  }
  
  export default Header;