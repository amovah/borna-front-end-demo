/* eslint-disable no-return-assign */
import React from 'react';
import NotificationSystem from 'rc-notification';
import { BasicNotification } from 'Root/shared/components/Notification';

let noti = null;
NotificationSystem.newInstance({}, n => noti = n);

const showNotification = (notification, position) => {
  noti.notice({
    content: <BasicNotification {...notification} />,
    duration: 500,
    closable: true,
    style: { top: 0, left: 0 },
    className: position,
  });
};

export default showNotification;
