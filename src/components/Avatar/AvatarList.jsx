import './AvatarList.css';
import Avatar from './Avatar';
import { getPublic } from '../../utils';

export default function AvatarList({ list = [] }) {
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
