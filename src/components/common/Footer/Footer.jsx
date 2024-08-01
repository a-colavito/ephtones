import React from 'react';

const Footer = () => {
  return (
    <div className="bg-slate-50 border-t-2 border-red-700 text-dark p-4 ">
      <div className="flex flex-col items-center space-y-2">
        <h4 className="text-lg font-semibold">Contacts</h4>
        <ul className="space-y-1 text-center">
          <li>
            <a href="mailto:ephtones@gmail.com" className="text-slate-950 hover:text-red-700">
              ephtones@gmail.com
            </a>
          </li>
          <li>viale Einaudi 27, 70125 Bari BA</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
