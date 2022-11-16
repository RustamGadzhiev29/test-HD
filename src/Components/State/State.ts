import React from "react";
export type eventType= {
  id: string,
  date: string,
  description:string
}
export type eventsInfoType={
  eventsId:string,
  title:string,
  startYear: string,
  endYear: string,
  events:eventType[]
  }

export const state:eventsInfoType[] = [
    { eventsId:'0',
      title: 'Наука',
      startYear: '1980',
      endYear: '1990',
      events: [
        {
          id: '0',
          date: '1980',
          description: 'Учёными Смитом, Рейтзема, Ларсоном и Фонтейном был открыт спутник Сатурна Телесто.',
        },
        {
          id: '1',
          date: '1985',
          description: '1 января — зарегистрированы первые домены верхнего уровня: .arpa, .com, .edu, .gb, .gov, .mil, .net, .org, .us.',
        },
        {
          id: '2',
          date: '1984',
          description: '24 января — в продажу поступил первый Apple Macintosh.',
        },
        {
          id: '3',
          date: '1981',
          description: '22 марта — запуск советского космического корабля «Союз-39», на борту которого совершил первый полёт монгольский космонавт Жугдэрдэмидийн Гуррагча.',
        },
        {
          id: '4',
          date: '1982',
          description: '24 июня — запущен «Союз Т-6» с первым французским космонавтом на борту (Жан-Лу Кретьен).',
        },
      ],
    },

    { eventsId:'1',
    title: 'Литератрута',
    startYear: '1990',
    endYear: '1999',
    events: [
      {
        id: '0',
        date: '1990',
        description: 'Всемирную премию фэнтези за лучший роман получил Джек Вэнс за роман «Lyonesse: Madouc».',
      },
      {
        id: '1',
        date: '1991',
        description: '«Американский психопат» — роман Брета Истона Эллиса.',
      },
      {
        id: '2',
        date: '1992',
        description: 'Учреждена премия Браги, первым лауреатом стал Карстен Альнес за роман «Trollbyen».',
      },
      {
        id: '3',
        date: '1993',
        description: '«Американские выдумки» — эссе хорватской писательницы Дубравки Угрешич.',
      },
      {
        id: '4',
        date: '1994',
        description: '«Бессонница» — роман Стивена Кинга.',
      },
    ],
  },

    {
      eventsId: '2',
      title: 'Спорт',
      startYear: '2000',
      endYear: '2010',
  
      events: [
        {
          id: '0',
          date: '2000',
          description: 'XXVII летние Олимпийские игры ',
        },
        {
          id: '1',
          date: '2004',
          description: 'XXVIII летние Олимпийские игры (официальное наименование — Игры XXVIII Олимпиады 2004 года) проводились в Афинах, Греция, с 13 по 29 августа. ',
        },
        {
          id: '2',
          date: '2005',
          description: '2005 год был объявлен «Международным годом спорта и физического воспитания как средства содействия воспитанию, здоровью, развитию и миру» ',
        },
        {
          id: '3',
          date: '2006',
          description: 'Одним из самых значительных событий в спорте в 2006 году стал финальный турнир чемпионата мира по футболу 2006 года, проходивший с 9 июня по 9 июля,',
        },
        {
          id: '4',
          date: '2007',
          description: ' «Интер» одержал 16-ю победу подряд в серии А, установив новый рекорд всех пяти самых престижных национальных первенств Европы.',
        },
      ],
    },
    {
      eventsId: '3',
      title: 'Кино',
      startYear: '2010',
      endYear: '2020',
  
      events: [
        {
          id: '0',
          date: '2010',
          description: 'Лучший фильм на иностранном языке: Аргентина «Тайна в его глазах»',
        },
        {
          id: '1',
          date: '2011',
          description: 'Лучший фильм: «Король говорит!»',
        },
        {
          id: '2',
          date: '2012',
          description: 'Лучший фильм: «Артист»',
        },
        {
          id: '3',
          date: '2013',
          description: 'Лучший фильм: «Операция "Арго"»',
        },
        {
          id: '4',
          date: '2014',
          description: 'Лучший фильм: «12 лет рабства»',
        },

      ],
    },
    {
      eventsId: '4',
      title: 'Катастрофы',
      startYear: '1980',
      endYear: '1990',
  
      events: [
        {
          id: '0',
          date: '1986',
          description: 'Авария на Чернобыльской АЭС (1986).',
        },
        {
          id: '1',
          date: '1985',
          description: 'Катастрофа Boeing 747 под Токио ',
        },
        {
          id: '2',
          date: '1982',
          description: 'Взрыв газопровода в Сибири в 1982 году ',
        },
        {
          id: '3',
          date: '1988',
          description: 'Йеллоустонский пожар 1988 года.',
        },
        {
          id: '4',
          date: '1989',
          description: 'Землетрясение Лома-Приета (1989).',
        },
      ],
    },
    {
      eventsId: '5',
      title: 'Музыка',
      startYear: '1970',
      endYear: '1980',
  
      events: [
        {
          id: '0',
          date: '1970',
          description: '10 апреля 1970 — официальный распад The Beatles',
        },
        {
          id: '1',
          date: '1976',
          description: 'первый советский коллектив («Песняры») отправляется на гастроли в США.',
        },
        {
          id: '2',
          date: '1971',
          description: 'ноябрь — выход альбома Led Zeppelin IV',
        },
        {
          id: '3',
          date: '1975',
          description: 'февраль — первый альбом AC/DC (High Voltage)',
        },
        {
          id: '4',
          date: '1974',
          description: 'Появление раннего хэви-метала (Black Sabbath, Judas Priest), ',
        },
      ],
    },
  ];
  
  export  const DataContex = React.createContext<eventsInfoType[]>(state)