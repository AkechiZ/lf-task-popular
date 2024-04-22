import { DetailItem, DetailList } from './details';
import './index.scss';
import {
  ShareAltOutlined,
  StarOutlined,
  UserOutlined,
  WarningOutlined,
} from '@ant-design/icons';

export function Panels(props) {
  return <div className="panels">{props.children}</div>;
}

export function Panel({ player }) {
  return (
    <div className="panel">
      <div className="title">{player.win ? 'Winner' : 'Loser'}</div>
      <div className="avatar">
        <img src={player.avatar_url} alt="" />
      </div>
      <div className="score">Scores: {player.public_repos}</div>
      <div className="username">
        <a href={player.html_url}>{player.name || 'Unknown'}</a>
      </div>
      <DetailList>
        <DetailItem icon={<UserOutlined style={{ color: 'orange' }} />}>
          {player.location || 'Unknown'}
        </DetailItem>
        <DetailItem icon={<StarOutlined style={{ color: 'blue' }} />}>
          {player.followers}
        </DetailItem>
        <DetailItem icon={<ShareAltOutlined style={{ color: '#1f74e7' }} />}>
          {player.following}
        </DetailItem>
        <DetailItem icon={<WarningOutlined style={{ color: '#f14c4c' }} />}>
          {player.public_repos}
        </DetailItem>
      </DetailList>
    </div>
  );
}
