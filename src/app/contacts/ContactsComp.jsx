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

  const [isBlocked, setIsBlocked] = useState(false); // Состояние для блокировки отправки
  const [blockTimeRemaining, setBlockTimeRemaining] = useState(0); // Оставшееся время блокировки

  const maxSubmissions = 5; // Максимальное количество отправок
  const timeWindow = 60 * 1000; // Время в миллисекундах (1 минута)
  const blockDuration = 5 * 60 * 1000; // Время блокировки (5 минут)

  // Получаем массив отправок из localStorage или инициализируем пустым массивом
  const getRecentSubmissions = () => {
    const savedSubmissions = localStorage.getItem('submissions');
    return savedSubmissions ? JSON.parse(savedSubmissions) : [];
  };

  const saveSubmissions = (submissions) => {
    localStorage.setItem('submissions', JSON.stringify(submissions));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Получаем текущие временные метки отправок
    const currentTime = new Date().getTime();
    const recentSubmissions = getRecentSubmissions();

    // Фильтруем метки времени отправок, которые произошли в пределах текущей минуты
    const recentSubmissionsWithinTimeWindow = recentSubmissions.filter(timestamp => currentTime - timestamp <= timeWindow);

    // Если отправлено больше 5 сообщений за последнюю минуту, блокируем форму на 5 минут
    if (recentSubmissionsWithinTimeWindow.length >= maxSubmissions) {
      setIsBlocked(true);
      setBlockTimeRemaining(blockDuration);
      return;
    }

    // Добавляем текущую метку времени отправки
    const updatedSubmissions = [...recentSubmissions, currentTime].slice(-10); // Храним только последние 10 отправок
    saveSubmissions(updatedSubmissions);

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

  // Таймер для отсчета времени блокировки
  React.useEffect(() => {
    if (isBlocked && blockTimeRemaining > 0) {
      const timer = setInterval(() => {
        setBlockTimeRemaining(prev => prev - 1000);
      }, 1000);

      return () => clearInterval(timer);
    }

    if (blockTimeRemaining <= 0) {
      setIsBlocked(false);
    }
  }, [isBlocked, blockTimeRemaining]);

  return (
    <>
      <div className='contacts'>
        <div className="contacts-blok">
          <div className="contacts-blok__section-1">
            <div className='contacts-blok__section-1__div'>
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
              onSubmit={handleFormSubmit}
            >
              {/* Скрытое поле для Formspree */}
              <input type="hidden" name="_subject" value="New contact form Akbar Soft" />

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
              <button type='submit' disabled={isBlocked}>
                <p>Отправить</p>
                <MdOutlineArrowRightAlt />
              </button>
              {isBlocked && (
                <p>Вы превысили лимит отправок. Попробуйте снова через {Math.ceil(blockTimeRemaining / 1000)} секунд.</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <GoogleMap />
    </>
  );
};