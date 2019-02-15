// packages
import * as React from 'react';

const Icon = ({ name }) => {
  let icon = <i className='ada-icon far fa-sync-alt fa-spin' />

  if (name === 'menu') icon = <i className='ada-icon fas fa-bars' />;
  if (name === 'close') icon = <i className='ada-icon fas fa-times' />;
  if (name === 'intro') icon = <i className='ada-icon far fa-home-heart' />;
  if (name === 'friends') icon = <i className='ada-icon far fa-users' />;
  if (name === 'night') icon = <i className='ada-icon fal fa-cloud-moon' />;
  if (name === 'morning') icon = <i className='ada-icon fal fa-sunrise' />;
  if (name === 'professor') icon = <i className='ada-icon fal fa-university' />;
  if (name === 'police') icon = <i className='ada-icon fal fa-star' />;
  if (name === 'b&b') icon = <i className='ada-icon fal fa-building' />;
  if (name === 'twitter') icon = <i className='ada-icon fab fa-twitter' />;
  if (name === 'instagram') icon = <i className='ada-icon fab fa-instagram' />;
  if (name === 'facebook') icon = <i className='ada-icon fab fa-facebook' />;
  if (name === 'web') icon = <i className='ada-icon fal fa-globe' />;

  return icon;
};

export default Icon;
