import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import {Wrapper as PopperWrapper} from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {

  const renderPreview = (prop) => {
    return (
      <div  tabIndex="-1" {...prop}>
      <PopperWrapper >
      <AccountPreview/>
      </PopperWrapper>
      </div>
    )
  }

  return ( 
  <div>
    <Tippy
    
    interactive
    offset={[-20,0]}
    delay={[800, 0]}
    placement="bottom"
    render={renderPreview}
    >
      <div className={cx('account-item')}>
               <img className={cx('avatar')} src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f2973ae48bac913f85cb6f72a4938b5f~c5_100x100.jpeg?x-expires=1701507600&x-signature=IZ8u4a%2BL20cbZ55MBZuiUMqLrw4%3D'
               alt=''/>
               <div className={cx('item-info')}>
                <h4 className={cx('nickname')}>
                  <strong>quocnguyenphu</strong>
                  <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>
               </div>
      </div>
    </Tippy>
  </div>
  );
}

AccountItem.propTypes = {

}

export default AccountItem;