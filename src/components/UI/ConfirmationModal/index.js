import React, { useState } from 'react';
import styles from './index.module.scss';

function ConfirmationModal({ children, onConfirm, title, message }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleConfirm = () => {
        handleClose();
        onConfirm();
    };

    return (
        <>
            {children(handleOpen)}
            {isOpen && (
                <div className={styles.modal}>
                    <div className={styles.modal_content}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.message}>{message}</p>
                        <button onClick={handleConfirm}>Yes</button>
                        <button onClick={handleClose}>No</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ConfirmationModal;