import classes from './Header.module.css';

function CurrentDate() {
    const currentDate = new Date();
  const toDay = `TO DAY: ${
    currentDate.getDate() < 10
      ? `0${currentDate.getDate()}`
      : currentDate.getDate()
        }.${
        currentDate.getMonth() + 1 < 10
        ? `0${currentDate.getMonth() + 1}`
        : currentDate.getMonth() + 1
        }.${currentDate.getFullYear()
    }`;
  return <div className={classes.header_date}>{toDay}</div>;
}

export default CurrentDate;