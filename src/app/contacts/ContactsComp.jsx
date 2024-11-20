import React from 'react';
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import GoogleMap from '../components/GoogleMap';

export default function ContactsComp() {
  return (
    <>
      <div className='contacts'>
        <div className="contacts-blok">
          <div className="contacts-blok__section-1">
            <div className='contacts-blok__section-1__div'>
              <p>Обратная связь</p>
              <h1>Свяжитесь с нами для обратной связи!</h1>
            </div>
            <div className="contacts-blok__section__container-parent">
              <div className="contacts-blok__section__container">
                <BsFillTelephonePlusFill className='contacts__icon' />
                <p><a href="tel:+998932201512">+998 93 220 15 12</a></p>
              </div>
              <div className="contacts-blok__section__container">
                <MdEmail className='contacts__icon' />
                <p>akbarsoftcompany@gmail.com</p>
              </div>
              <div className="contacts-blok__section__container">
                <FaLocationDot className='contacts__icon' />
                <p>Bukhara, Korzinka-3</p>
              </div>
            </div>
          </div>
          <div className="contacts-blok__section-2">
            <form
              className="contacts-blok__form"
              method="POST"
              data-netlify="true"
              name="contact-form"
            >
              {/* Скрытое поле для Netlify */}
              <input type="hidden" name="form-name" value="contact-form" />

              <div className="contacts-blok__form__section">
                <div className="contacts-blok__form__section-div">
                  <label htmlFor="full-name">Полное Имя*</label>
                  <input type="text" name="full-name" required minLength={3} />
                </div>
                <div className="contacts-blok__form__section-div">
                  <label htmlFor="email">Email*</label>
                  <input type="email" name="email" required />
                </div>
              </div>
              <div className="contacts-blok__form__section">
                <div className="contacts-blok__form__section-div">
                  <label htmlFor="project-type">Тема обращение*</label>
                  <input type="text" name="project-type" required minLength={5} />
                </div>
                <div className="contacts-blok__form__section-div">
                  <label htmlFor="phone">Телефон*</label>
                  <input type="tel" name="phone" required minLength={12} />
                </div>
              </div>
              <div className="contacts-blok__form__section">
                <div className='contacts-blok__form__section-div'>
                  <label htmlFor="message">Сообщение*</label>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={100}>
                  </textarea>
                </div>
              </div>
              <button type='submit'>
                <p>Отправить</p>
                <MdOutlineArrowRightAlt />
              </button>
            </form>
          </div>
        </div>
      </div>
      <GoogleMap />
    </>
  );
};