/* eslint-disable no-return-assign */
import NotificationSystem from 'rc-notification';

let noti = null;
NotificationSystem.newInstance({}, n => noti = n);

const showNotification = ({ notification, position }) => {
  noti.notice({
    content: notification,
    duration: 5,
    closable: true,
    style: { top: 0, left: 240 },
    className: position,
  });
};

export default showNotification;
