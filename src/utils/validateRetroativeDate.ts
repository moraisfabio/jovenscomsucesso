import moment from 'moment';

function validateRetroativeDate(date: string): boolean {
  const now = new Date();
  const nowMoment = moment(now).format('YYYY-MM-DD HH:mm');
  const dateMoment = moment(date).format('YYYY-MM-DD HH:mm');
  if (dateMoment < nowMoment) {
    return true;
  }
  return false;
}

export default validateRetroativeDate;
