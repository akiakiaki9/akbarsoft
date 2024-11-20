'use client';
import React, { useState } from 'react';
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import GoogleMap from '../components/GoogleMap';

export default function ContactsComp() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    tel: '',
    age: '',
    body: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mpwaljag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thanks for registration!');
        setFormData({
          firstName: '',
          lastName: '',
          tel: '',
          age: '',
          gender: '',
          examType: '',
          body: ''
        });
      } else {
        alert('Error submitting form.');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting form.');
    }
  };

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
              onSubmit={handleFormSubmit}
            >
              {/* Скрытое поле для Netlify */}
              <input type="hidden" name="form-name" value="contact-form" />

              <div className="contacts-blok__form__section">
                <div className="contacts-blok__form__section-div">
                  <label htmlFor="firstName">Имя*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    minLength={3}
                  />
                </div>
                <div className="contacts-blok__form__section-div">
                  <label htmlFor="lastName">Фамилия*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="contacts-blok__form__section">
                <div className="contacts-blok__form__section-div">
                  <label htmlFor="tel">Телефон*</label>
                  <input
                    type="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="contacts-blok__form__section-div">
                  <label htmlFor="age">Возраст*</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="contacts-blok__form__section">
                <div className='contacts-blok__form__section-div'>
                  <label htmlFor="body">Сообщение*</label>
                  <textarea
                    name="body"
                    value={formData.body}
                    onChange={handleInputChange}
                    required
                    minLength={10}
                    maxLength={100}
                  />
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