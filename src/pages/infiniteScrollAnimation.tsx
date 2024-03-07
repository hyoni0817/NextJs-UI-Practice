import React, { useEffect } from 'react';
import styled from 'styled-components';

const MainBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Scroller = styled.div`
  margin: 0 auto;
  max-width: 600px;

  & .scroller__inner {
    padding-block: 1rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  &[data-animated='true'] {
    border: 5px solid lime;
    overflow: hidden;

    -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  }

  &[data-animated='true'] .scroller__inner {
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll 20s linear infinite;
  }

  @keyframes scroll {
    to {
      transform: translate(calc(-50% - 0.5rem));
    }
  }
`;

const TagList = styled.ul`
  margin: 0;
  padding-inline: 0;
  list-style: none;

  & li {
    padding: 1rem;
    background: #f6f6f6;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem -0.25rem #999999;
  }
`;

const Test = styled.li`
  background: red !important;
`;

const InfiniteScrollAnimation = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');
    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);
      });
    }

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }
  }, []);

  return (
    <MainBox>
      <Scroller className="scroller">
        <TagList className="scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>SSG</li>
          <li>webdev</li>
          <li>animation</li>
          <li>UI/UX</li>
          <li>front-end</li>
        </TagList>
      </Scroller>
    </MainBox>
  );
};

export default InfiniteScrollAnimation;
