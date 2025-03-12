/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Button = ({
  children,
  disabled,
  to,
  type = 'button',
  btnStyle,
  onClick,
}) => {
  const base =
    ' inline-block text-sm rounded-lg bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    small: `${base} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
    primary: `${base} px-4 py-3 md:py-4 md:px-6`,
    secondary:
      'inline-block text-sm rounded-lg border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-200 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:py-3.5 md:px-6',
  };

  if (to)
    return (
      <Link to={to} className={styles[btnStyle]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button
        disabled={disabled}
        type={type}
        className={styles[btnStyle]}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} type={type} className={styles[btnStyle]}>
      {children}
    </button>
  );
};

export default Button;
