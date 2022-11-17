import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  function LinkOnClick(e) {
    navigate(e)
  }

  return (
    <header className='header mb-5'>
      <div className='w-100 d-flex justify-content-between'>
        <img
          className='m-3 header-img'
          src='tcb-logo.png'
          alt='tcb-logo'
          width='250px'
          onClick={() => LinkOnClick('/')}
        />
        <nav className=''>
          <button
            type='button'
            className='btn btn-light d-flex h-100 px-4 align-items-center'
            data-bs-toggle='modal'
            data-bs-target='#loginModal'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              fill='currentColor'
              className='bi bi-person-fill'
              viewBox='0 0 16 16'
              id='member-icon'
            >
              <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
            </svg>
            <div>會員登入</div>
          </button>
        </nav>
      </div>
    </header>
  );
}
