import VanillaCalendar, { Options } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options: Options = {
  settings: {
    range: {
      min: '2022-07-01',
      max: '2022-09-30',
      disabled: ['2022-08-10:2022-08-13', '2022-08-22'],
    },
    selected: {
      year: 2022,
      month: 7,
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
