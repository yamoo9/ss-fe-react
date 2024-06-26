import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { getPublic } from '@/utils';

import Avatar from '@/components/Avatar/Avatar';

describe('Avatar 컴포넌트', () => {
  it('아바타 오프라인 상태 표시', () => {
    render(
      <Avatar source={getPublic('face-photos/man-01.jpg')} name="황성규" />
    );

    const element = screen.getByRole('figure');

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('title', '오프라인');
  });

  it('아바타 온라인 상태 표시', () => {
    render(
      <Avatar
        source={getPublic('face-photos/man-01.jpg')}
        name="황성규"
        online
      />
    );

    const element = screen.getByRole('figure');

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('title', '온라인');
  });

  it(`아바타 커스텀 사이즈 설정`, () => {
    let size = Math.floor(Math.random() * 512);

    render(
      <Avatar
        source={getPublic('face-photos/man-01.jpg')}
        name="황성규"
        size={size}
        online
      />
    );

    const element = screen.getByRole('figure');
    const image = element.querySelector('img');

    size = String(size);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('width', size);
    expect(image).toHaveAttribute('height', size);
  });
});
