import React, { useState } from "react";
import { BookmarkContext } from "./BookmarkContext";

const BookmarkProvider = ({ children }) => {
  const [bookmark, setBookmark] = useState([]);
  const bookmarkInfo = { bookmark, setBookmark };
  return <BookmarkContext value={bookmarkInfo}>{children}</BookmarkContext>;
};

export default BookmarkProvider;
