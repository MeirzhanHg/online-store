import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_content">
          <div className="footer_columns">
            <div className="footer_row">
              <div className="footer_item">
                <h3 className="footer_title">Exclusive</h3>
                <div className="footer_label">Подписаться</div>
                <div className="footer_text">
                  Получите скидку при первом заказе
                </div>
              </div>
            </div>

            <div className="footer_row">
              <div className="footer_item">
                <div className="footer_label">Поддержка</div>
                <div className="footer_text">Караганда, Казахстан</div>
                <div className="footer_email">exclusive@gmail.com</div>
                <a href="tel:87751863360" className="footer_phone">
                  8 775 186 33 60
                </a>
              </div>
            </div>

            <div className="footer_row">
              <div className="footer_item">
                <div className="footer_label">Аккаунт</div>
                <div className="footer_text">
                  <Link>Мой аккаунт</Link>
                </div>
                <div className="footer_text">
                  <Link to={"/login"}>Войти / Регистрация</Link>
                </div>
                <div className="footer_text">
                  <Link to={"/contact"}>Карта</Link>
                </div>
                <div className="footer_text">
                  <Link>Избранные</Link>
                </div>
              </div>
            </div>

            <div className="footer_row">
              <div className="footer_item">
                <div className="footer_label">Ссылки</div>
                <div className="footer_text">
                  <Link>Privacy Policy</Link>
                </div>
                <div className="footer_text">
                  <Link>Terms Of Use</Link>
                </div>
                <div className="footer_text">
                  <Link>FAQ</Link>
                </div>
                <div className="footer_text">
                  <Link to={"/contact"}>Контакты</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_cop">
        Copyright Exclusive 2023. Все права защищены
      </div>
    </footer>
  );
};

export default Footer;