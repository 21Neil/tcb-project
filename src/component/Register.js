import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  function LinkOnClick(e) {
    navigate(e)
  }

  return (
    <Fragment>
      <main className='w-50 mx-auto'>
        <form action='' className='mb-5'>
          <legend className='fw-normal fs-5 text-secondary border-start border-secondary border-5 ps-2 mb-3'>
            個人資料
          </legend>
          <fieldset>
            <div className='row align-items-center'>
              <div className='col-2'><span className='text-danger'>*</span>身分證字號</div>
              <div className='col'>
                <input type='text' className='form-control' />
              </div>
              <div className='col-2'><span className='text-danger'>*</span>生日</div>
              <div className='col'>
                <input type='date' className='form-control' />
              </div>
            </div>
            <div className='row align-items-center mt-3'>
              <div className='col-2'><span className='text-danger'>*</span>姓名</div>
              <div className='col'>
                <input type='text' className='form-control' />
              </div>
              <div className='col-2'><span className='text-danger'>*</span>行動電話</div>
              <div className='col'>
                <input type='number' className='form-control' />
              </div>
            </div>
            <div className='row align-items-center mt-3'>
              <div className='col-2'><span className='text-danger'>*</span>Email</div>
              <div className='col'>
                <input type='email' className='form-control' />
              </div>
            </div>
          </fieldset>
        </form>
        <div className='mb-5'>
          <h5 className='fw-normal fs-5 text-secondary border-start border-secondary border-5 ps-2 mb-3'>
            自動註冊會員說明
          </h5>
          <p>
            為了方便您之後線上查詢/變更保單內容、申請理賠，國泰人壽將依據您所填寫資料自動為您註冊本網站會員。請審閱並充分理解以下文件、可能產生之風險及相關使用約定
          </p>
        </div>
        <div className='mb-4' style={{ height: '400px' }}>
          <div id='agreement-nav' className='bg-green text-light'>
            <ul className='row align-items-center justify-content-evenly text-center'>
              <li className='col'>
                <a className='nav-link p-4' href='#heading1'>
                  個人資料保護法
                </a>
              </li>
              <li className='col'>
                <a className='nav-link p-4' href='#heading2'>
                  本網站使用說明書
                </a>
              </li>
              <li className='col'>
                <a className='nav-link p-4' href='#heading3'>
                  同意網站投保聲明事項
                </a>
              </li>
              <li className='col'>
                <a className='nav-link p-4' href='#heading4'>
                  網路保險服務契約書
                </a>
              </li>
            </ul>
          </div>
          <div
            data-bs-spy='scroll'
            data-bs-target='#agreement-nav'
            data-bs-root-margin='0px 0px 0%'
            data-bs-smooth-scroll='true'
            className='h-75 overflow-auto'
            tabIndex='0'
          >
            <h4 id='heading1'>First heading</h4>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <br></br>
            <h4 id='heading2'>Second heading</h4>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <br></br>
            <h4 id='heading3'>Third heading</h4>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <br></br>
            <h4 id='heading4'>Fourth heading</h4>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className='w-100 text-center'>
          <button className='btn btn-orange mx-auto'
          onClick={() => LinkOnClick('/verify')}>
            我以審閱並同意以上文件，進行身分驗證
          </button>
        </div>
      </main>
    </Fragment>
  );
}
