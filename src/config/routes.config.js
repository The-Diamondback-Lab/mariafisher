// pages
import { Index } from '../app/pages';

// organisms
import { Lightbox } from '../app/organisms';

// templates
import { Section } from '../app/templates';

/**
 * React Router configuration.
 *
 * @file Client side routes using React Router
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// routes
const INDEX_ROUTE = {
  path: '/',
  component: Section,
  name: 'Fisher: 1 Year Later',
  flamelink_id: 'intro',
  section_id: 'section01'
};

const FRIENDS_ROUTE = {
  path: '/friends',
  component: Section,
  name: 'II - Fisher',
  flamelink_id: 'intro',
  section_id: 'section01'
};

const GALLERY_ROUTE = {
  path: '/:section/gallery?image=:id',
  component: Lightbox,
  name: 'Gallery Image'
};

// route arrays
const ROUTES_ARR = [
  INDEX_ROUTE,
  FRIENDS_ROUTE,
  GALLERY_ROUTE
];

export { ROUTES_ARR };
