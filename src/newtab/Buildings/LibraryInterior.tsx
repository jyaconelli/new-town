import './LibraryInterior.css'

import { BuildingMetadata } from '../utils'
// LibraryInterior.tsx
import React from 'react'

interface LibraryInteriorProps {
  metadata: BuildingMetadata
  bookmarks: { url: string; title: string }[]
}

const LibraryInterior: React.FC<LibraryInteriorProps> = ({ metadata, bookmarks }) => {
  const randomColor = () => {
    const colors = [
      '#FFB6C1',
      '#87CEFA',
      '#98FB98',
      '#FFD700',
      '#FFA07A',
      '#9370DB',
      '#FF6347',
      '#4682B4',
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  // Group books into rows
  const booksPerRow = 5 // Number of books per row
  const rows = []
  for (let i = 0; i < bookmarks.length; i += booksPerRow) {
    rows.push(bookmarks.slice(i, i + booksPerRow))
  }

  return (
    <div className="library-interior">
      <h3>{metadata.label} Bookmarks</h3>
      <div className="bookshelf">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="book-row">
            {row.map((bookmark, index) => (
              <div key={index} className="book" style={{ backgroundColor: randomColor() }}>
                <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                  {bookmark.title}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LibraryInterior
