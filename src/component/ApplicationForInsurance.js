import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ApplicationForInsurance() {
  const navigate = useNavigate();
  function LinkOnClick(e) {
    navigate(e);
  }

  return (
    <Fragment>
      <main className='w-50 mx-auto'>
        <h5 className='fw-normal fs-5 text-secondary border-start border-secondary border-5 ps-2 mb-3'>
          基本資料
        </h5>
        <form action=''>
          <div className='mb-5 text-end'>
            <div className='row mb-2 justify-content-center'>
              <label for='chinese-name' class='col-form-label col-6'>
                <span className='text-danger'>*</span>中文姓名
              </label>
              <div className='col-6'>
                <input
                  type='text'
                  class='form-control'
                  id='chinese-name'
                  placeholder='請輸入中文姓名'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label for='aboriginal-name' class='col-form-label col-6'>
                原住民羅馬拼音姓名
              </label>
              <div className='col-6'>
                <input
                  type=''
                  class='form-control'
                  id='aboriginal-name'
                  placeholder='此欄位非必填'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label for='ID-number' class='col-form-label col-6'>
                <span className='text-danger'>*</span>身分證字號
              </label>
              <div className='col-6'>
                <input
                  type='text'
                  class='form-control'
                  id='ID-number'
                  placeholder='請輸入身分證字號'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label for='birthday' class='col-form-label col-6'>
                <span className='text-danger'>*</span>生日
              </label>
              <div className='col-6'>
                <input
                  type='date'
                  class='form-control'
                  id='birthday'
                  placeholder='請輸入身分證字號'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label for='telephone' class='col-form-label col-6'>
                電話
              </label>
              <div className='col-6'>
                <input type='number' class='form-control' id='telephone' />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label for='mailing-address' class='col-form-label col-6'>
                <span className='text-danger'>*</span>通訊地址
              </label>
              <div className='col-6'>
                <input
                  type='text'
                  class='form-control'
                  id='mailing-address'
                  placeholder='為保障您的權益，此欄位不可空白'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label for='residence-address' class='col-form-label col-6'>
                <span className='text-danger'>*</span>戶籍地址
              </label>
              <div className='col-6'>
                <input
                  type='text'
                  class='form-control'
                  id='residence-address'
                  placeholder='為保障您的權益，此欄位不可空白'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label for='email' class='col-form-label col-6'>
                <span className='text-danger'>*</span>E-mail
              </label>
              <div className='col-6'>
                <input
                  type='email'
                  class='form-control'
                  id='email'
                  placeholder='為保障您的權益，此欄位不可空白'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label for='phone' class='col-form-label col-6'>
                <span className='text-danger'>*</span>手機
              </label>
              <div className='col-6'>
                <input
                  type='number'
                  class='form-control'
                  id='phone'
                  placeholder='為保障您的權益，此欄位不可空白'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label for='emergency-contact' class='col-form-label col-6'>
                緊急聯絡人
              </label>
              <div className='col-6'>
                <input
                  type='text'
                  class='form-control'
                  id='emergency-contact'
                  placeholder='為保障您的權益，此欄位不可空白'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label
                for='emergency-contact-phone'
                class='col-form-label col-6'
              >
                緊急聯絡人電話
              </label>
              <div className='col-6'>
                <input
                  type='number'
                  class='form-control'
                  id='emergency-contact-phone'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label
                for='emergency-contact-address'
                class='col-form-label col-6'
              >
                緊急聯絡人地址
              </label>
              <div className='col-6'>
                <input
                  type='text'
                  class='form-control'
                  id='emergency-contact-address'
                  placeholder='為保障您的權益，此欄位不可空白'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label for='emergency-contact' class='col-form-label col-6'>
                緊急聯絡人
              </label>
              <div className='col-6'>
                <input
                  type='text'
                  class='form-control'
                  id='emergency-contact'
                  placeholder='為保障您的權益，此欄位不可空白'
                />
              </div>
            </div>
            <div className='row mb-2 justify-content-center'>
              <label for='clerk' class='col-form-label col-6'>
                本公司介紹加入業務員
              </label>
              <div className='col-6'>
                <input type='text' class='form-control' id='clerk' />
              </div>
            </div>
          </div>
          <div className='text-end'>
            <button
              className='btn btn-orange'
              onClick={() => LinkOnClick('/payment')}
            >
              付款
            </button>
          </div>
        </form>
      </main>
    </Fragment>
  );
}
