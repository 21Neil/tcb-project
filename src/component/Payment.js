import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();
  function LinkOnClick(e) {
    navigate(e);
  }

  return (
    <Fragment>
      <main className='w-50 mx-auto'>
        <h5 className='fw-normal fs-5 text-secondary border-start border-secondary border-5 ps-2 mb-3'>
          刷卡系統
        </h5>
        <form action=''>
          <div className='mb-5 text-end'>
            <div className='row mb-2 justify-content-center'>
              <label for='amount' class='col-form-label col-6'>
                消費金額
              </label>
              <div className='col-6'>
                <input
                  type='number'
                  class='form-control-plaintext'
                  id='amount'
                  defaultValue={1099}
                  readOnly
                  disabled
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label for='credit-card-number' class='col-form-label col-6'>
                信用卡卡號
              </label>
              <div className='col-6'>
                <input
                  type='number'
                  class='form-control'
                  id='credit-card-number'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label
                for='credit-card-effective-date'
                class='col-form-label col-6'
              >
                信用卡有效日期
              </label>
              <div className='col-6'>
                <input
                  type='date'
                  class='form-control'
                  id='credit-card-effective-date'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label
                for='credit-card-last-three-yards'
                class='col-form-label col-6'
              >
                卡片背面簽名欄末三碼
              </label>
              <div className='col-6'>
                <input
                  type='number'
                  class='form-control'
                  id='credit-card-last-three-yards'
                />
              </div>
            </div>
            <div className='row mb-5 justify-content-center'>
              <label for='verify-num' class='col-form-label col-6'>
                請輸入驗證碼
              </label>
              <div className='col-6'>
                <input
                  type='number'
                  class='form-control'
                  id='verify-num'
                />
              </div>
            </div>
            <div className='container px-4'>
              <div className='row row-cols-auto justify-content-center gx-2'>
                <div className='col'>
                  <button className='btn btn-orange'>確認付款</button>
                </div>
                <div className='col'>
                  <button
                    className='btn btn-orange'
                    onClick={() =>
                      LinkOnClick('/application-for-insurance')
                    }
                  >
                    取消
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </Fragment>
  );
}
