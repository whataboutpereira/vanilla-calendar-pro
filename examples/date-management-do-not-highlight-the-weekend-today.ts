import VanillaCalendar, { Options } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options: Options = {
  settings: {
    visibility: {
      weekend: false,
      today: false,
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
