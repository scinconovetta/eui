import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  EuiLoadingSpinner
} from '../../loading';

import { getSecureRelForTarget } from '../../../services';

import {
  ICON_TYPES,
  EuiIcon,
} from '../../icon';

const colorToClassNameMap = {
  primary: 'euiButtonEmpty--primary',
  danger: 'euiButtonEmpty--danger',
  disabled: 'euiButtonEmpty--disabled',
  text: 'euiButtonEmpty--text',
  ghost: 'euiButtonEmpty--ghost',
};

export const COLORS = Object.keys(colorToClassNameMap);

const sizeToClassNameMap = {
  xs: 'euiButtonEmpty--xSmall',
  s: 'euiButtonEmpty--small',
  l: 'euiButtonEmpty--large',
};

export const SIZES = Object.keys(sizeToClassNameMap);

const iconSideToClassNameMap = {
  left: '',
  right: 'euiButtonEmpty--iconRight',
};

export const ICON_SIDES = Object.keys(iconSideToClassNameMap);

const flushTypeToClassNameMap = {
  'left': 'euiButtonEmpty--flushLeft',
  'right': 'euiButtonEmpty--flushRight',
};

export const FLUSH_TYPES = Object.keys(flushTypeToClassNameMap);

export const EuiButtonEmpty = ({
  children,
  className,
  iconType,
  iconSide,
  color,
  size,
  flush,
  isDisabled,
  isLoading,
  href,
  target,
  rel,
  type,
  buttonRef,
  ...rest
}) => {

  // If in the loading state, force disabled to true
  isDisabled = isLoading ? true : isDisabled;

  const classes = classNames(
    'euiButtonEmpty',
    colorToClassNameMap[color],
    sizeToClassNameMap[size],
    iconSideToClassNameMap[iconSide],
    flushTypeToClassNameMap[flush],
    className,
  );

  // Add an icon to the button if one exists.
  let buttonIcon;

  if (isLoading) {
    buttonIcon = (
      <EuiLoadingSpinner
        className="euiButton__spinner"
        size="m"
      />
    );
  } else if (iconType) {
    buttonIcon = (
      <EuiIcon
        className="euiButtonEmpty__icon"
        type={iconType}
        size="m"
        aria-hidden="true"
      />
    );
  }

  // <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
  // this is a button and piggyback off its disabled styles.
  if (href && !isDisabled) {
    const secureRel = getSecureRelForTarget(target, rel);

    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={secureRel}
        ref={buttonRef}
        {...rest}
      >
        <span className="euiButtonEmpty__content">
          {buttonIcon}
          <span>{children}</span>
        </span>
      </a>
    );
  } else {
    return (
      <button
        disabled={isDisabled}
        className={classes}
        type={type}
        ref={buttonRef}
        {...rest}
      >
        <span className="euiButtonEmpty__content">
          {buttonIcon}
          <span>{children}</span>
        </span>
      </button>
    );
  }
};

EuiButtonEmpty.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  iconType: PropTypes.oneOf(ICON_TYPES),
  iconSide: PropTypes.oneOf(ICON_SIDES),
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(SIZES),
  flush: PropTypes.oneOf(FLUSH_TYPES),
  isDisabled: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,

  /**
   * Adds/swaps for loading spinner & disables
   */
  isLoading: PropTypes.bool,

  type: PropTypes.string,
  buttonRef: PropTypes.func,
};

EuiButtonEmpty.defaultProps = {
  type: 'button',
  iconSide: 'left',
  color: 'primary',
};
