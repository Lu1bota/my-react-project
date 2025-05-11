interface Book {
  id: string;
  name: string;
}

const books: Book[] = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Query overview" },
];

export default function App() {
  return (
    <>
      <h1>Books of the week</h1>
      <ul>
        {books.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
}
