/* 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его
 соответствующим образом. */
 
 interface User {
    name: string;
    age: number;
    occupation: string;
    children?: number;
    car?: string;
  }
  
  const users: User[] = [
    {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep',
      car: 'VW',
    },
    {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut',
      children: 2,
    },
  ];
