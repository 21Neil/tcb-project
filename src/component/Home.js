import React from 'react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  function LinkOnClick(e) {
    navigate(e);
  }

  return (
    <Fragment>
      <main className='w-50 mx-auto'>
        <h5 className='fw-bold fs-5  ps-2 mb-3'>商品列表</h5>
        <div className='card shadow-sm p-3 mb-5 bg-body rounded w-50 cursor-pointer'
         onClick={() => LinkOnClick('/application-for-insurance')}>
          <div className='card-body'>
            <h5 className='card-title color-green fs-4 mb-3'>年金保險</h5>
            <p className='card-text fs-5'>
              低費用率，並享有身故保證給傅機制，市場波動免擔心
            </p>
            <hr />
            <div className='row row-cols-auto justify-content-between text-secondary fs-6 fw-light mb-2'>
              <p className='col'>承保年齡</p>
              <p className='col'>15足歲~64歲</p>
            </div>
            <div className='row row-cols-auto justify-content-between text-secondary fs-6 fw-light mb-2'>
              <p className='col'>保險期間</p>
              <p className='col'>終身</p>
            </div>
            <div className='text-secondary fs-6 fw-light mb-2'>
              <p className='mb-4'>給付項目</p>
              <div className='row row-cols-auto'>
                <div className='col text-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    class='bi bi-coin orange mb-1'
                    viewBox='0 0 16 16'
                  >
                    <path d='M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z' />
                    <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                    <path d='M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
                  </svg>
                  <p>年金給付</p>
                </div>
                <div className='col text-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    class='bi bi-coin orange mb-1'
                    viewBox='0 0 16 16'
                  >
                    <path d='M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z' />
                    <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                    <path d='M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
                  </svg>
                  <p>保證給付</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
