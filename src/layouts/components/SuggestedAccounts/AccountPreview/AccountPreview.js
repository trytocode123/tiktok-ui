import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import styles from "./AccountPreview.module.scss";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}> 
     <div className={cx('header')}>
        <img 
        className={cx('avatar')} 
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f2973ae48bac913f85cb6f72a4938b5f~c5_100x100.jpeg?x-expires=1701507600&x-signature=IZ8u4a%2BL20cbZ55MBZuiUMqLrw4%3D"
         alt=""
        />
        <div>
          <Button className={cx('follow-btn')} primary>Follow</Button>
          </div>
     </div>
     <div className={cx('body')}>
               <h4 className={cx('nickname')}>
                  <strong>quocnguyenphu</strong>
                  <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>
                <p className={cx('analytics')}>
                  <strong className={cx('value')}>8.2M </strong>
                  <span className={cx('label')}>Followers</span>
                  <strong className={cx('value')}>8.2M </strong>
                  <span className={cx('label')}>Likes</span>
                </p>
     </div>
    </div>
    );
}

export default AccountPreview;