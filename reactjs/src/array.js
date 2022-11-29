const myArray = ['apple', 'banana', 'orange'];

export const myList = myArray.map((item) =>
<li key={item.toString()}>
  {item}
</li>
);