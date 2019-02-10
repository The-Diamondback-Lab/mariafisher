// pages
import { Index } from '../app/pages';

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
  component: Index,
  name: 'Fisher: 1 Year Later'
};

const SECTION_ROUTE = {
  path: '/story/:section',
  component: Section,
  name: 'Section'
};

// route arrays
const ROUTES_ARR = [
  INDEX_ROUTE,
  SECTION_ROUTE
];

export { ROUTES_ARR };
