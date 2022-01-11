export interface UIStateDto {
  cartIsVisible: boolean;
  notification: null | Notification;
}

interface Notification {
  status: string;
  title: string;
  message: string;
}
