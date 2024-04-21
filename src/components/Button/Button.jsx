export const Button = ({ label, changeStatistic }) => (
  <button type="button" onClick={() => changeStatistic(label.toLowerCase())}>
    {label}
  </button>
);
