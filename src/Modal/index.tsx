import React from 'react';
import ReactDOM from 'react-dom';
import './_style.scss';

export type ModalProps = {
  show: boolean,
  allowScroll?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function Modal(props: ModalProps) {
  if (props.show) {
    const { className, children, ...modalProps } = props;
    const cssClass = className ? ` ${className}` : '';
    let modalBase = document.getElementById('val-modal');
    if (!modalBase) {
      modalBase = document.createElement('div');
      modalBase.id = 'val-modal';
      document.body.prepend(modalBase);
    }

    document.body.style.overflow = props.allowScroll ? 'auto' : 'hidden';
    return ReactDOM.createPortal(
      <div className={`val-modal-backdrop`}>
        <div className={`val-modal${cssClass}`} {...modalProps}>
          {children}
        </div>
      </div>,
      modalBase
    );
  }

  document.body.style.overflow = 'auto';
  return null;
}
