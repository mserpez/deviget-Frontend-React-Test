export interface IPost {
  author: string;
  commentsQty: number;
  createdAt: number;
  id: string;
  photoURL: string;
  thumbnail: string;
  title: string;
  // custom attrs
  _isDismissed?: boolean;
  _isRead?: boolean;
}
