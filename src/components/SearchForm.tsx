"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText.toLowerCase()}`);
  }
  return (
    <form className="w-full sm:w-145" onSubmit={handleSubmit}>
      <input
        className="h-16 w-full rounded-lg bg-white/7 px-6 ring-accent/50 transition outline-none focus:bg-white/10 focus:ring-2"
        type="text"
        placeholder="Search events in any city..."
        spellCheck={false}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
