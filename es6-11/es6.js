// shorthand property name
const jm1 = {
  name: 'jm',
  age: '28',
};

const name = 'jm';
const age = '28';

const jm2 = {
  name: name,
  age: age,
};

const jm3 = {
  name,
  age,
}

console.log(jm1,jm2,jm3)

// Destructuring Assignment
{
  // object
  const student = {
    name: 'Anna',
    level: 1,
  }
  
  {
    const name = student.name;
    const level = student.level;
    console.log(name,level);
  }

  {
    const { name, level } = student;
    console.log(name, level);

  }
  {
    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel)
  }
  // array
  const animals = ['cat', 'dog'];

  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  {
    const [first, second] = animals;
    console.log(first, second);
  }

}

// Spread Syntax

{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  obj1.key = 'key4';

  // array copy 각각 낱개로 가져와서 복사하는 것을 의미
  const arrayCopy = [...array];
  const arrayJust = array
  
  obj1.key = 'key4';
  console.log(array, arrayCopy);

  console.log('just', arrayJust)

  // copy 한 후 데이터 추가
  const arrayCopy2 = [...array, { key: 'key3' }];
  console.log(array, arrayCopy2);
}

