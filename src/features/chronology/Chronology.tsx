import { useState, FC } from 'react';

import { ChronologySlider, ChronologyCarousel } from './components';
import { MOCK_DATA } from './constants';
import { Title, CenteredWrapper, ChronologyWrapper } from './styled';

const Chronology: FC = () => {
  const [activePeriodIndex, setActivePeriodIndex] = useState(0);

  const { events, ...restData } = MOCK_DATA[activePeriodIndex];

  return (
    <CenteredWrapper>
      <ChronologyWrapper>
        <Title>Исторические даты</Title>
        <ChronologyCarousel
          activePeriodIndex={activePeriodIndex}
          onPeriodChange={setActivePeriodIndex}
          {...restData}
        />
        <ChronologySlider events={events} />
      </ChronologyWrapper>
    </CenteredWrapper>
  );
};

export { Chronology };
