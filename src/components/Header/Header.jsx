import React from 'react';
import './Header.css';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
const Header = () => {
  return (
    <>
      <section className=" flex justify-center">
        <ul className="flex text-[#bdb9b9] gap-10 py-4 px-8 bg-black rounded-[120px] mt-5 links">
          <li className="hover:text-green-600">
            <a
              href="https://github.com/Utkarshrajmishra/Get-AI-News"
              target="blank"
            >
              <FaGithub fontSize="1.5em" />
            </a>
          </li>
          <li className="hover:text-green-600">
            <a
              href="https://www.instagram.com/utk_075/?igsh=MTcyN2liYXJydTI3Ng%3D%3D"
              target="blank"
            >
              {' '}
              <FaInstagram fontSize="1.5em" target="blank" />
            </a>
          </li>
          <li className="hover:text-green-600">
            <a
              href="https://stackoverflow.com/users/16363404/mandarin"
              target="blank"
            >
              <FaStackOverflow fontSize="1.5em" />
            </a>
          </li>
          <li className="hover:text-green-600">
            <a
              href="https://stackoverflow.com/users/16363404/mandarin"
              target="blank"
            >
              <FaLinkedin fontSize="1.5em" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
