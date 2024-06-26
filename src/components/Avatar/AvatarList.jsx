import './AvatarList.css';
import Avatar from './Avatar';
import { getPublic } from '@/utils';

export default function AvatarList({ list = [] }) {
  if (list.length === 0) {
    return <p>화면에 표시할 아바타가 없습니다. 😲</p>;
  }

  return (
    <ul className="AvatarList">
      {list.map(({ id, filename, ext, name, isOnline }) => (
        <li key={id}>
          <Avatar
            source={getPublic(`face-photos/${filename}.${ext}`)}
            name={name}
            online={isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
