import { lazy } from 'react';

export { DeleteButtonAsync as DeleteButton } from './button/deleteButton/DeleteButton.async';
export { EditButtonAsync as EditButton } from './button/editButton/EditButton.async';
export { Count } from './count/Count.async';
export { Card } from './card/Card.async';

export const Button = lazy(() => import('antd/es/button/button'));
export const Input = lazy(() => import('antd/es/input/Input'));
export const InputPassword = lazy(() => import('antd/es/input/Password'));
export const Modal = lazy(() => import('antd/es/modal/Modal'));
export const DatePicker = (await import('antd/es/date-picker')).default;
export const Table = (await import('antd/es/table/Table')).default;
export const Image = (await import('antd/es/image')).default;
