import React, { useState, useMemo, useCallback } from "react";

const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

function ListSearch() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleSelect = useCallback((item) => {
    console.log("Selected:", item);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>

      <input
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <ul>
        {filteredItems.map(item => (
          <ListItem
            key={item}
            item={item}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </div>
  );
}

const ListItem = React.memo(function ListItem({ item, onSelect }) {
  console.log("Rendered:", item);
  return <li onClick={() => onSelect(item)}>{item}</li>;
});

export default ListSearch;
