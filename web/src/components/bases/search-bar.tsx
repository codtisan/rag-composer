import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export type SearchBarProps = {
  searchInput: string;
};

const SearchBar = ({}: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 bg-background text-foreground border-input focus:ring-2 focus:ring-ring"
      />
    </div>
  );
};

export default React.memo(SearchBar);
