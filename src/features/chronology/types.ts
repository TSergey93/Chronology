export const enum ChronologyField {
  Sport = 'Спорт',
  Literature = 'Литература',
  Cinema = 'Кино',
  Science = 'Наука',
  Music = 'Музыка',
  Technology = 'Технологии',
}

export interface Event {
  year: number;
  description: string;
}

export interface YearPeriod {
  field: ChronologyField;
  yearStart: number;
  yearEnd: number;
  events: Event[];
}
