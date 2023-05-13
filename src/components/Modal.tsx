import React from 'react'

import styles from './Modal.module.css'

interface Props {
   children: React.ReactNode
}

const closeModal = (e:React.MouseEvent): void => {
  const modal = document.querySelector('#modal')
  modal!.classList.add('hide')
}

const Modal = ({children}: Props) => {
  return (
    <div id='modal'>
        <div className={styles.fade} onClick={closeModal}></div>

        <div className={styles.modal}>
            <h2>Sua tarefa</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal