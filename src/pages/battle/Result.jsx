import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button, Panel, Panels } from '@/components';
import { getUser } from '@/services/modules/home';

export default function Result() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const player1 = searchParams.get('player1');
  const player2 = searchParams.get('player2');

  const [player1Info, setPlayer1Info] = useState();
  const [player2Info, setPlayer2Info] = useState();

  const ready = !!player1Info && !!player2Info;

  useEffect(() => {
    if (!player1 || !player2) {
      navigate('/battle');
    }
  }, [player1, player2]);

  useEffect(() => {
    Promise.all([getUser(player1), getUser(player2)]).then(
      ([newPlayer1Info, newPlayer2Info]) => {
        let winner = 'player1';

        if (newPlayer1Info.public_repos < newPlayer2Info.public_repos) {
          winner = 'player2';
        }

        setPlayer1Info({ ...newPlayer1Info, win: winner === 'player1' });
        setPlayer2Info({ ...newPlayer2Info, win: winner === 'player2' });
      },
    );
  }, [player1, player2]);

  return (
    ready && (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Panels>
          <Row>
            <Col
              style={{ display: 'flex', justifyContent: 'center' }}
              sm={12}
              xs={24}
            >
              <Panel player={player1Info} />
            </Col>
            <Col
              style={{ display: 'flex', justifyContent: 'center' }}
              sm={12}
              xs={24}
            >
              <Panel player={player2Info} />
            </Col>
          </Row>
        </Panels>
        <Button
          onClick={() => {
            navigate('/battle');
          }}
        >
          RESET
        </Button>
      </div>
    )
  );
}
