import moment from 'moment';

export function toDisplayDate(date, format = 'MM月DD日') {
  if (!date) {
    return date;
  }
  return moment(date).format(format);
}

export function toApplicationLocalDate(date) {
  return moment(date).format('YYYY-MM-DD');
}
