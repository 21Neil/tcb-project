import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Verify() {
  const navigate = useNavigate();
  function LinkOnClick(e) {
    navigate(e);
  }

  return (
    <Fragment>
      <main className='w-50 mx-auto'>
        <h5 className='fw-normal fs-5 text-secondary border-start border-secondary border-5 ps-2 mb-5'>
          身分驗證
        </h5>
        <div className='w-50 mx-auto mb-4'>
          <p className='mb-2'>
            我們已將驗證碼發送至您留存的手機及電子信箱請於{' '}
            <span className='text-success'>5分鐘</span>{' '}
            內輸入驗證，逾時驗證碼將失效
          </p>
          <div className='row row-cols-auto align-items-center mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              class='bi bi-phone color-green col'
              viewBox='0 0 16 16'
            >
              <path d='M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z' />
              <path d='M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
            </svg>
            <p className='col'>0987****47</p>
          </div>
          <div className='row row-cols-auto align-items-center mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              class='bi bi-envelope color-green col'
              viewBox='0 0 16 16'
            >
              <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
            </svg>
            <p className='col'>john@gmail.com</p>
          </div>
          <div className='row justify-content-center'>
            <button className='btn btn-secondary fw-light col-auto'>
              60秒後可重新發送
            </button>
          </div>
        </div>
        <form action="">
          <div className='mb-5'>
            <div className='row mb-1'>
              <label for='verify-num' class='col-form-label col-2'>
                <span className='text-danger'>*</span>驗證碼
              </label>
              <div className='col-4'>
                <input
                  type='text'
                  class='form-control'
                  id='verify-num'
                  placeholder='請輸入驗證碼'
                />
              </div>
            </div>
            <div className='row mb-1'>
              <label for='verify-num' class='col-form-label col-2'>
                <span className='text-danger'>*</span>設定密碼
              </label>
              <div className='col-4'>
                <input
                  type='password'
                  class='form-control'
                  id='password'
                  placeholder='8-12碼英文及數字'
                />
              </div>
            </div>
            <div className='row mb-1'>
              <label for='verify-num' class='col-form-label col-2'>
                <span className='text-danger'>*</span>確認密碼
              </label>
              <div className='col-4'>
                <input
                  type='password'
                  class='form-control'
                  id='password'
                  placeholder='8-12碼英文及數字'
                />
              </div>
            </div>
          </div>
        </form>
        <div className='w-100 align-items-center text-center position-relative'>
          <div className='position-absolute top-50 start-0 translate-middle-y'>
            <div
              className='col-auto orange cursor-pointer'
              onClick={() => LinkOnClick('/register')}
            >
              <span className='pe-2'>{'<'}</span>返回修改註冊資料
            </div>
          </div>
          <div className=''>
            <button className='btn btn-orange'>註冊並下一步</button>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
