const myCalendar = function() {
  const calendar = document.querySelector('.calendar');
  const monthView = document.querySelector('.calendar__month');
  const dateView = document.querySelector('.calendar__date');
  const prevMonthBtn = document.querySelector('.calendar__button_left');
  const nextMonthBtn = document.querySelector('.calendar__button_right');
  const infoView = document.querySelector('.calendar__info');
  const dayList = [...document.querySelectorAll('.calendar__list-item')];

  const date = new Date();
  let defaultMonth = date.getMonth();

  const showInfo = function() {
    const currentDate = new Date();

    const dateDiffInDays = Math.round((date - currentDate) / (24 * 60 * 60 *1000));

    switch (dateDiffInDays) {
      case 0: {
        infoView.innerHTML = 'СЕГОДНЯ';
        break;
      }
      case 1: {
        infoView.innerHTML = 'ЗАВТРА';
        break;
      }
      case -1: {
        infoView.innerHTML = 'ВЧЕРА';
        break;
      }
      default: {
        if (dateDiffInDays > 0) {
          infoView.innerHTML = `ЧЕРЕЗ ${dateDiffInDays} ДНЕЙ`;
          break;
        }

        infoView.innerHTML = `${-dateDiffInDays} ДНЕЙ НАЗАД`;
        break;
      }
    }
  };

  const fillDayList = function fillCalendarDatesAndSetInactiveClasses() {
    let dayOfWeek, diff;

    date.setDate(1);
    dayOfWeek = date.getDay();
    if (dayOfWeek === 0) dayOfWeek = 7;
    diff = 1 - dayOfWeek;
    date.setDate(1 + diff);

    dayList.forEach((item) => {
      item.classList.remove('calendar__list-item_empty');
      item.classList.remove('calendar__list-item_active');

      if (date.getMonth() !== defaultMonth) {
        item.classList.add('calendar__list-item_empty');
      }

      item.innerHTML = date.getDate();
      date.setDate(date.getDate() + 1);
    });
  };

  const setCalendar = function setMonthDateAndFillCalendar() {
    const currentMonth = date.toLocaleString('ru', { month: 'long' }).toUpperCase();
    
    monthView.innerHTML = currentMonth;
    dateView.innerHTML = date.getDate();

    fillDayList();

    date.setMonth(defaultMonth);
    showInfo();
  };

  const setNextMonth = function addMonthByOneAndSetCalendar() {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    defaultMonth = date.getMonth();
    setCalendar();
  };

  const setPrevMonth = function reduceMonthByOneAndSetCalendar() {
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    defaultMonth = date.getMonth();
    setCalendar();
  };

  const chooseDay = function setChoosenDayOnHeader(event) {
    const target = event.target;
    
    if (!target.closest('.calendar__list-item')) return;
    if (target.classList.contains('calendar__list-item_empty')) return;

    dateView.innerHTML = target.innerHTML;
    dayList.forEach((item) => { 
      item.classList.remove('calendar__list-item_active');
    });
    target.classList.add('calendar__list-item_active');

    date.setDate(parseInt(target.innerHTML));
    
    showInfo();
  };

  nextMonthBtn.addEventListener('click', setNextMonth, false);
  prevMonthBtn.addEventListener('click', setPrevMonth, false);
  calendar.addEventListener('click', chooseDay, false);

  setCalendar();
};

export { myCalendar };
