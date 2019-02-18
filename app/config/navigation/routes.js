import _ from 'lodash';
import { FontIcons } from '../../assets/icons';
import * as Screens from '../../screens/index';

export const MainRoutes = [
 
  {
    id: 'ProfileSettings',
    title: 'Profile Settings',
    icon: FontIcons.login,
    screen: Screens.ProfileSettings,
    children: [],
  },
  {
    id: 'Articles2',
    title: 'Article List V2',
    icon: FontIcons.article,
    screen: Screens.Articles2,
    children: [],
  },
  {
    id: 'ChatList',
    title: 'Chat List',
    icon: FontIcons.mail,
    screen: Screens.ChatList,
    children: [],
  },
  {
    id: 'Dashboard',
    title: 'Dashboard',
    icon: FontIcons.dashboard,
    screen: Screens.Dashboard,
    children: [],
  },
  
  {
    id: 'EcommerceMenu',
    title: 'Billeterie',
    icon: FontIcons.card,
    screen: Screens.EcommerceMenu,
    children: [
      {
        id: 'Cards',
        title: 'Cards',
        icon: FontIcons.card,
        screen: Screens.Cards,
        children: [],
      },
      {
        id: 'AddToCardForm',
        title: 'Add Card Form',
        icon: FontIcons.addToCardForm,
        screen: Screens.AddToCardForm,
        children: [],
      },

    ],
  },
  {
    id: 'OtherMenu',
    title: 'Other',
    icon: FontIcons.other,
    screen: Screens.OtherMenu,
    children: [
      {
        id: 'Settings',
        title: 'Settings',
        screen: Screens.Settings,
        children: [],
      },
    ],
  },
  {
    id: 'OtherMenu',
    title: 'Other',
    icon: FontIcons.other,
    screen: Screens.OtherMenu,
    children: [
      {
        id: 'Settings',
        title: 'Settings',
        screen: Screens.Settings,
        children: [],
      },
    ],
  },
  {
    id: 'OtherMenu',
    title: 'Other',
    icon: FontIcons.other,
    screen: Screens.OtherMenu,
    children: [
      {
        id: 'Settings',
        title: 'Settings',
        screen: Screens.Settings,
        children: [],
      },
    ],
  },
  {
    id: 'OtherMenu',
    title: 'Other',
    icon: FontIcons.other,
    screen: Screens.OtherMenu,
    children: [
      {
        id: 'Settings',
        title: 'Settings',
        screen: Screens.Settings,
        children: [],
      },
    ],
  },
  {
    id: 'OtherMenu',
    title: 'Other',
    icon: FontIcons.other,
    screen: Screens.OtherMenu,
    children: [
      {
        id: 'Settings',
        title: 'Settings',
        screen: Screens.Settings,
        children: [],
      },
    ],
  },
  {
    id: 'NavigationMenu',
    icon: FontIcons.navigation,
    title: 'Navigation',
    screen: Screens.NavigationMenu,
    children: [
      {
        id: 'GridV1',
        title: 'Grid Menu V1',
        screen: Screens.GridV1,
        children: [],
      },
      {
        id: 'GridV2',
        title: 'Grid Menu V2',
        screen: Screens.GridV2,
        children: [],
      },
      {
        id: 'List',
        title: 'List Menu',
        screen: Screens.ListMenu,
        children: [],
      },
      {
        id: 'Side',
        title: 'Side Menu',
        action: 'DrawerOpen',
        screen: Screens.SideMenu,
        children: [],
      },
    ],
  },
  
];

const menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'GridV1',
  title: 'Start',
  screen: Screens.GridV2,
  children: [],
});

export const MenuRoutes = menuRoutes;
