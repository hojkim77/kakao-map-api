import React, { useEffect } from 'react';
import styles from "./modal.module.css";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? `${styles.modal} ${styles.openModal}` : styles.modal }>
      {open ? (
        <section>
          <header>
            {header}
            <button className={styles.close} onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className={styles.close} onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;