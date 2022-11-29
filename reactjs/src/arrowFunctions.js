/* example of arrow functions */

const hello1 = function() {
    return "Hello World!";
}

const hello2 = () => {
  return "Hello World!";
}

export const hello3 = () => "Hello World!";

export const retArray = () => [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "age",
    accessor: "age",
  },
  {
    Header: "gender",
    accessor: "gender",
  },
  {
    Header: "height",
    accessor: "height",
  },
  {
    Header: "color",
    accessor: "col",
  },
  {
    Header: "dob",
    accessor: "dob",
  },
]