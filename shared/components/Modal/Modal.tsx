import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Modal.module.scss";
import cn from "classnames";
import CloseRounded from "@material-ui/icons/CloseRounded";

const Modal: FunctionComponent<
  {
    children: ReactNode;
    closeModal: () => void;
    open: boolean;
    scrollable?: boolean;
    size?: "sm" | "md";
    footer?: ReactNode;
    fullHeight?: boolean;
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({
  children,
  closeModal,
  open,
  scrollable = false,
  size = "md",
  footer,
  fullHeight,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.modal,
        {
          [styles.modal__closed]: !open,
          [styles.modal__fullHeight]: fullHeight,
          [styles.modal__small]: size === "sm",
          [styles.modal__medium]: size === "md",
        },
        className
      )}
    >
      <button
        aria-label="close"
        className={styles.modal_closeButton}
        onClick={() => closeModal()}
      >
        <CloseRounded />
      </button>

      <div className={styles.modal_shadow} onClick={() => closeModal()} />

      <div
        className={cn(styles.modal, styles.modal_content, {
          [styles.modal__small]: size === "sm",
          [styles.modal__medium]: size === "md",
          [styles.modal__scrollable]: scrollable,
        })}
        {...props}
      >
        {children}
      </div>
      <div className={cn(styles.modal_footer)}>{footer}</div>
    </div>
  );
};

export default Modal;
