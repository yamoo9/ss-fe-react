import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import avatarsData from '@/data/avatars.json';
import AvatarList from '@/components/Avatar/AvatarList';

describe('AvatarList 컴포넌트', () => {
  it('list 속성(prop) 배열 값이 빈 경우 아무 것도 렌더링하지 않음', () => {
    render(<AvatarList />);
    const list = screen.queryByRole('list');
    expect(list).not.toBeInTheDocument();
    const infoMessage = screen.getByText(/화면에 표시할 아바타가 없습니다./i);
    expect(infoMessage).toBeInTheDocument();
  });

  it('list 속성(prop)이 전달된 경우, 화면에 리스트 렌더링', () => {
    render(<AvatarList list={avatarsData} />);

    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(avatarsData.length);

    avatarsData.forEach((avatar) => {
      const image = screen.getByRole('img', { name: avatar.name });
      expect(image).toBeInTheDocument();

      const figcaption = image.nextElementSibling;
      if (figcaption.matches('figcaption')) {
        expect(figcaption).toHaveAttribute(
          'aria-label',
          avatar.isOnline ? '온라인' : '오프라인'
        );
      }
    });
  });
});
