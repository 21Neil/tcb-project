import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterModal() {
  const navigate = useNavigate();
  function LinkOnClick(e) {
    navigate(e)
  }

  return (
    <div
      className='modal fade'
      id='loginModal'
      tabIndex='-1'
      aria-labelledby='register-modal'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
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
            <h1 className='modal-title fs-5'>會員登入</h1>
            <button
              type='button'
              className='btn-close btn-light'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <div className='mb-3'>
              <p className=''>請填寫您的身分資訊</p>
            </div>
            <div className='mb-3'>
              <label htmlFor='account' className='form-label'>
              <span className='text-danger'>*</span>身分證字號/居留證號
              </label>
              <input type='text' className='form-control' id='account' />
            </div>
            <div className='mb-3'>
              <label htmlFor='birthday' className='form-label'>
              <span className='text-danger'>*</span>生日
              </label>
              <input
                type='date'
                className='form-control'
                id='birthday'
                placeholder='請輸入西元年格式，例:19900101'
              />
            </div>
          </div>
          <div className='m-auto mb-3'>
            <button
              type='button'
              className='btn btn-orange px-3'
              onClick={() => LinkOnClick('/register')}
              data-bs-dismiss='modal'
            >
              登入
            </button>
          </div>
          <div className='m-auto mb-5 row'>
            <div
              className='col-auto orange cursor-pointer'
            >
              忘記密碼
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
