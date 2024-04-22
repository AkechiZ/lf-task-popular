import { Col, Row } from 'antd';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import './index.scss';
import {
  StarOutlined,
  StepForwardOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';

export function Instructions(props) {
  const navigate = useNavigate();

  const ready = !!props.players;

  return (
    <div className="instructions">
      <div className="instructions-title">Instructions</div>
      <div className="instruction-item-container">
        <Row>
          <Col sm={8} xs={24}>
            <InstructionItem
              icon={
                <UsergroupDeleteOutlined
                  style={{ color: 'orange', fontSize: '50px' }}
                />
              }
            >
              Enter tow Github
            </InstructionItem>
          </Col>
          <Col sm={8} xs={24}>
            <InstructionItem
              active={ready}
              icon={
                <StepForwardOutlined
                  style={{
                    fontSize: '50px',
                    color: props.players ? 'red' : 'gray',
                  }}
                />
              }
              onClick={() => {
                if (!ready) {
                  return;
                }

                const [player1, player2] = props.players ?? [];

                navigate(
                  `/battle/result?player1=${player1}&player2=${player2}`,
                );
              }}
            >
              Battle
            </InstructionItem>
          </Col>
          <Col sm={8} xs={24}>
            <InstructionItem
              icon={
                <StarOutlined style={{ color: 'yellow', fontSize: '50px' }} />
              }
            >
              See the winner
            </InstructionItem>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export function InstructionItem(props) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={clsx('instruction-item-wrapper', {
        'instruction-item-active': props.active,
      })}
      onClick={props.onClick}
    >
      <div className="instruction-item-title">{props.children}</div>
      <div className="instruction-item-icon">{props.icon}</div>
    </div>
  );
}
