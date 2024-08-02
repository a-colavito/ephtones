import React from 'react';

const Footer = () => {
  return (
    <div className="bg-slate-50 border-t-2 border-violet-900 text-dark p-7  bg-green-100">
      <div className="flex flex-col items-center space-y-2">
        <h4 className="text-xl font-semibold">Contacts</h4>
        <ul className="space-y-1 text-center">
          <li>
            <a href="mailto:ephtones@gmail.com" className="text-lg text-slate-950 hover:text-red-700">
              ephtones@gmail.com
            </a>
          </li>
          <li className='text-lg'>Viale Einaudi 27, 70125 Bari BA</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
