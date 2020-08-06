import CollectionsIcon from '@material-ui/icons/Collections';
import GroupIcon from '@material-ui/icons/Group';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import IconPeople from '@material-ui/icons/People';

export const MenuItems = [
  {
    name: ' Master',
    Icon: CollectionsIcon,
    items: [
      { name: 'Area', link: '/master/area' },
      { name: 'Category', link: '/master/category' },
      {
        name: 'City',
        link: '/master/city',
        Icon: LocationCityIcon,
      },
      {
        name: 'Company',
        link: '/master/company',
      },
      {
        name: 'Country',
        link: '/master/country',
      },
      {
        name: 'Designation',
        link: '/master/designation',
      },
      {
        name: 'State',
        link: '/master/state',
        Icon: LocationCityIcon,
      },
      {
        name: 'Users',
        link: '/master/users',
        Icon: GroupIcon,
      },
    ],
  },
  {
    name: 'Client',
    link: '/client',
    Icon: IconPeople,
  },
  {
    name: 'Karigar',
    link: '/karigar',
  },
  {
    name: 'Order',
    link: '/order',
  },
  {
    name: 'Production',
    items: [
      {
        name: 'Job Work',
        link: '/production/jobwork',
      },
      {
        name: 'Job Issue',
        link: '/production/jobissue',
      },
      {
        name: 'Job Receive',
        link: '/production/jobreceive',
      },
    ],
  },
  {
    name: 'Voucher',
    link: '/voucher',
  },
  {
    name: 'Report',
    link: '/report',
  },
];
