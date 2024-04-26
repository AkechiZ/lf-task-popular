import { yupResolver } from '@hookform/resolvers/yup';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import './index.scss';
import { CloseOutlined } from '@ant-design/icons';

export function Players(props) {
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();

  useEffect(() => {
    if (!!player1 && !!player2) {
      props.onChange([player1, player2]);
    } else {
      props.onChange();
    }
  }, [player1, player2]);

  return (
    <div className="players">
      <h2 className="players-title">Players</h2>
      <div className="player-form-container">
        <Row gutter={[16, 16]}>
          <Col sm={12} xs={24}>
            <PlayerForm
              value={player1}
              onChange={(username) => {
                setPlayer1(username);
              }}
              label="Player One"
            />
          </Col>
          <Col sm={12} xs={24}>
            <PlayerForm
              value={player2}
              onChange={(username) => {
                setPlayer2(username);
              }}
              label="Player Two"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

const schema = object({
  player: string().required(),
}).required();

export function PlayerForm(props) {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    trigger();
  }, []);

  return (
    <form
      className="player-form"
      onSubmit={handleSubmit((data) => {
        props.onChange(data.player);
      })}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="form-label">{props.label}</label>
      <div className="form-item">
        <input
          {...register('player')}
          className="input"
          disabled={!!props.value}
        />
        <button
          disabled={errors.player || !!props.value}
          className="button"
          type="submit"
        >
          SUBMIT
        </button>
      </div>
      {props.value && (
        <div className="player-avatar">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            className="delete"
            type="button"
            style={{ backgroundColor: 'white' }}
            onClick={() => {
              props.onChange(undefined);
            }}
          >
            <CloseOutlined style={{ color: 'orange' }} />
          </button>
          <img
            src={`https://github.com/${props.value}.png?size=100`}
            alt={props.value}
          />
        </div>
      )}
    </form>
  );
}
