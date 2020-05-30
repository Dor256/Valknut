import React from 'react';
import ReactDOM from 'react-dom';
import './_style.scss';

export type ModalProps = {
  show: boolean,
  onDismiss(): void,
  allowScroll?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function Modal(props: ModalProps) {
  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    props.onClick && props.onClick(event);
  }

  if (props.show) {
    const { className, children, onDismiss, ...modalProps } = props;
    const cssClass = className ? ` ${className}` : '';
    let modalBase = document.getElementById('val-modal');
    if (!modalBase) {
      modalBase = document.createElement('div');
      modalBase.id = 'val-modal';
      document.body.prepend(modalBase);
    }

    document.body.style.overflow = props.allowScroll ? 'auto' : 'hidden';
    return ReactDOM.createPortal(
      <div className={`val-modal-backdrop`} onClick={onDismiss}>
        <div className={`val-modal${cssClass}`} {...modalProps} onClick={handleClick}>
          {children}
        </div>
      </div>,
      modalBase
    );
  }

  document.body.style.overflow = 'auto';
  return null;
}
