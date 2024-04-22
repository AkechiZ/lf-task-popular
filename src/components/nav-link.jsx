// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import './index.scss';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

export function BattleLink(props) {
  return (
    <div className={clsx('nav-link', 'battle-link')} {...props}>
      <span className="nav-link-text">Battle</span>
      <ArrowRightOutlined style={{ color: 'orange' }} />
    </div>
  );
}

export function PopularLink(props) {
  return (
    <div className={clsx('nav-link', 'popular-link')} {...props}>
      <ArrowLeftOutlined style={{ color: 'orange' }} />
      <span className="nav-link-text">Popular</span>
    </div>
  );
}
