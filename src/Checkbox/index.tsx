import React, { useCallback } from 'react';
import './_style.scss';

export type CheckboxProps = {
  onCheck?(value: boolean): void,
  label?: string,
  withStrikethrough?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Checkbox(props: CheckboxProps) {
  const { className, onCheck, checked, label, withStrikethrough } = props;
  const cssClass = className ? ` ${className}` : '';
  const strikethrough = withStrikethrough ? ' strikethrough' : '';

  const onCheckboxToggled = useCallback(() => {
    onCheck && onCheck(!checked);
  }, [checked, onCheck]);

  return (
    <div className={`val val-checkbox-container${cssClass}`}>
      <input
        {...props}
        className='val val-checkbox'
        type='checkbox'
      />
      <span className='val val-checkmark' onClick={onCheckboxToggled}></span>
      {label ? <label htmlFor={name} className={`val val-checkbox-label${strikethrough}`}>{label}</label> : null}
    </div>
  );
}
