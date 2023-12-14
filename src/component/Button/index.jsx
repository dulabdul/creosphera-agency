import Link from 'next/link';
import PropTypes from 'prop-types';

export default function CustomButton(props) {
  const className = [props.className];
  if (props.isWidthAuto) className.push('w-auto');
  if (props.isBlock) className.push('block');
  if (props.hasShadow) className.push('shadow-sm');
  if (props.isPrimary) className.push('bg-sekunder shadow-sekunder');
  if (props.isPrimaryHover)
    className.push(
      'hover:bg-cyanColor hover:shadow-cyanColor transition-all duration-200 ease-in'
    );
  if (props.isSecondary) className.push('bg-cyanColor shadow-cyanColor');
  if (props.isSecondaryHover)
    className.push(
      'hover:bg-sekunder hover:shadow-sekunder transition-all duration-200 ease-in'
    );
  if (props.isRounded) className.push('rounded-[10px]');
  if (props.isRoundedFull) className.push('rounded-full');
  if (props.isFlex) className.push('flex');
  if (props.isFull) className.push('w-full');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isLoading) {
    return (
      <span
        className={className.join(' ')}
        style={props.style}>
        {props.isLoading ? (
          <>
            <span className='spinner-border spinner-border-sm mx-5'></span>
            <span className='sr-only'>Loading....</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }
  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          aria-label={props.ariaLabel}
          onClick={props.onClick}
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}>
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          href={props.href}
          className={className.join(' ')}
          style={props.style}>
          {props.children}
        </Link>
      );
    }
  } else if (props.isDisabled) {
    return (
      <button
        className={className.join(' ')}
        style={props.style}
        value={props.value}
        disabled
        onClick={onClick}>
        {props.children}
      </button>
    );
  }

  return (
    <button
      className={className.join(' ')}
      style={props.style}
      value={props.value}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}

CustomButton.propTypes = {
  type: PropTypes.oneOf(['button', 'link']),
  onClick: PropTypes.func,
  target: PropTypes.string,
  href: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isWidthAuto: PropTypes.bool,

  isLight: PropTypes.bool,
  isBlock: PropTypes.bool,
  isFlex: PropTypes.bool,
  isFull: PropTypes.bool,
  isTransparent: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isPrimaryHover: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isSecondaryHover: PropTypes.bool,
  isRounded: PropTypes.bool,
  isHover: PropTypes.bool,
  ariaLabel: PropTypes.string,
  isRoundedFull: PropTypes.bool,
  isExternal: PropTypes.bool,
  hasShadow: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string,
};
