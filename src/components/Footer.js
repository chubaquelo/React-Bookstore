import React from 'react';

const Footer = () => (
  <footer className="w-full flex items-center justify-center mx-auto h-8percent md:border-t-2 border-gray-200 text-gray-600 text-center sticky">
    <p>
      Made with
      {'  '}
      <span className="text-red">❤</span>
      {'  '}
      by
      {'  '}
      <a href="http://github.com/epinczinger" rel="noreferrer" target="_blank">
        @epinczinger
      </a>
      {'  '}
      &
      {'  '}
      <a href="https://github.com/chubaquelo" rel="noreferrer" target="_blank">
        @chubaquelo
      </a>
    </p>
  </footer>
);

export default Footer;
