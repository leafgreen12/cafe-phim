import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Quảng Cáo',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Tạo Mới',
        link: '/pages/forms/create/banners-ads',
      },
      {
        title: 'Danh Sách',
        link: '/pages/forms/table/banners-ads',
      },
    ],
  },
  {
    title: 'Cine Cafe',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Tạo Mới',
        link: '/pages/forms/create/cine-cafe',
      },
      {
        title: 'Danh Sách',
        link: '/pages/forms/table/cine-cafe',
      },
    ],
  },
  {
    title: 'Dịch Vụ',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Tạo Mới',
        link: '/pages/forms/create/dich-vu',
      },
      {
        title: 'Danh Sách',
        link: '/pages/forms/table/dich-vu',
      },
    ],
  },
  {
    title: 'Giá Phòng',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Tạo Mới',
        link: '/pages/forms/create/gia-phong',
      },
      {
        title: 'Danh Sách',
        link: '/pages/forms/table/gia-phong',
      },
    ],
  },
  {
    title: 'Thực Đơn',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Tạo Mới',
        link: '/pages/forms/create/thuc-don',
      },
      {
        title: 'Danh Sách',
        link: '/pages/forms/table/thuc-don',
      },
    ],
  },
  {
    title: 'Khuyến Mại',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Tạo Mới',
        link: '/pages/forms/create/khuyen-mai',
      },
      {
        title: 'Danh Sách',
        link: '/pages/forms/table/khuyen-mai',
      },
    ],
  },
  {
    title: 'Cafe Phim',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Tạo Mới',
        link: '/pages/forms/create/cafe-phim',
      },
      {
        title: 'Danh Sách',
        link: '/pages/forms/table/cafe-phim',
      },
    ],
  },
  {
    title: 'Tuyển Dụng',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Tạo Mới',
        link: '/pages/forms/create/tuyen-dung',
      },
      {
        title: 'Danh Sách',
        link: '/pages/forms/table/tuyen-dung',
      },
    ],
  },
  {
    title: 'Đặt Phòng',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Danh Sách',
        link: '/pages/forms/table/dat-phong',
      },
    ],
  },
];
