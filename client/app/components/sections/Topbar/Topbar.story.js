import r from 'r-dom';
import { storiesOf } from '@kadira/storybook';
import withProps, { storify, defaultRailsContext } from '../../Styleguide/withProps';

import Topbar from './Topbar';
const containerStyle = { style: { minWidth: '600px', background: 'white' } };

storiesOf('Top bar')
  .add('Picture logo 1', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'Bikerrrs',
        image: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
      },
    })))
  .add('Picture logo 2', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'Placeholder marketplace',
        image: 'http://placehold.it/350x150',
      },
    })))
  .add('Short text logo', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'My Marketplace',
      },
    })))
  .add('Long text logo', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'My Marketplace with a long name',
      },
    })))
  .add('With keyword search', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'Bikerrrs',
        image: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
      },
      search_mode: 'keyword',
      search_keyword_placeholder: 'Search...',
      search_location_placeholder: 'Location',
    })))
  .add('With location search', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'Bikerrrs',
        image: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
      },
      search_mode: 'location',
      search_keyword_placeholder: 'Search...',
      search_location_placeholder: 'Location',
    })))
  .add('With keyword and location search', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'Bikerrrs',
        image: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
      },
      search_mode: 'keyword-and-location',
      search_keyword_placeholder: 'Search...',
      search_location_placeholder: 'Location',
    })))
    .add('Menu', () => (
      r(storify(
        r(Topbar, {
          logo: {
            href: 'http://example.com',
            text: 'Bikerrrs',
            image: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
          },
          search_mode: 'keyword-and-location',
          search_keyword_placeholder: 'Search...',
          search_location_placeholder: 'Location',
          menu: {
            isOpen: false,
            name: 'Menu',
            identifier: 'Menu',
            menuLabelType: 'menu',
            content: [
              {
                type: 'menuitem',
                href: 'http://example.com#about',
                content: 'About',
                active: true,
                activeColor: '#43A5CC',
              },
              {
                type: 'menuitem',
                href: 'http://example.com#link',
                content: 'Link',
                active: false,
                activeColor: '#43A5CC',
              },
              {
                type: 'menuitem',
                href: 'http://example.com#link2',
                content: 'Link2',
                active: false,
                activeColor: '#43A5CC',
              },
              {
                type: 'menuitem',
                href: 'http://example.com#longlink',
                content: 'Lorem ipsum dolor sit amet consectetur adepisci velit',
                active: false,
                activeColor: '#43A5CC',
              },
            ],
          },
          languageMenu: {
            isOpen: false,
            name: 'En',
            identifier: 'LanguageMenu',
            menuLabelType: 'menu',
            content: [
              {
                type: 'menuitem',
                href: 'http://example.com#en',
                content: 'English',
                active: true,
                activeColor: '#43A5CC',
              },
              {
                type: 'menuitem',
                href: 'http://example.com#fi',
                content: 'Finnish',
                active: false,
                activeColor: '#43A5CC',
              },
              {
                type: 'menuitem',
                href: 'http://example.com#fr',
                content: 'French',
                active: false,
                activeColor: '#43A5CC',
              },
            ],
          },
        }),
        containerStyle
      ))
  ));
