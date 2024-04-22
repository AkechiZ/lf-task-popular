import { Center } from './center';
import { LoadingOutlined } from '@ant-design/icons';

export function Empty(props) {
  return (
    <Center style={{ height: 200 }}>
      <p>{props.message}</p>
    </Center>
  );
}

export function Loading() {
  return (
    <Center style={{ height: 200 }}>
      <LoadingOutlined style={{ fontStyle: '24px' }} />
    </Center>
  );
}
