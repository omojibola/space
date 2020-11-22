import React from 'react';
import { Alert as Notif } from 'reactstrap';

export const Alert = () => {
  const showNotification = () => {
    setTimeout(() => {
      <Notif color="success">
        This is a success alert with{' '}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Notif>;
    }, 3000);
  };

  return { showNotification };
};
