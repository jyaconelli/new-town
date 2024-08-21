import './Popup.css'

// Popup.tsx
import React, { useEffect, useState } from 'react'

const categories = [
  { label: 'Library', value: 'library' },
  { label: 'Arcade', value: 'arcade' },
  { label: 'Post Office', value: 'postOffice' },
  { label: 'School/Office', value: 'schoolOffice' },
  { label: 'Home', value: 'home' },
  { label: 'Park/Town Square', value: 'parkTownSquare' },
  { label: 'Train Station', value: 'trainStation' },
  { label: 'Cinema', value: 'cinema' },
]

const BookmarkPopup: React.FC = () => {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState(categories[0].value)

  // Fetch the current tab's URL and title when the component mounts
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0]
      if (activeTab) {
        setUrl(activeTab.url || '')
        setTitle(activeTab.title || '')
      }
    })
  }, [])

  const handleSubmit = () => {
    if (!url || !title) return

    const bookmark = { url, title }

    // Save the bookmark using Chrome's storage API
    chrome.storage.sync.get([category], (result) => {
      const updatedBookmarks = result[category] ? [...result[category], bookmark] : [bookmark]
      chrome.storage.sync.set({ [category]: updatedBookmarks }, () => {
        console.log('Bookmark saved')
        setUrl('') // Clear input field after saving
        setTitle('')
      })
    })
  }

  return (
    <div className="bookmark-popup">
      <h3>Add a Bookmark</h3>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Add Bookmark</button>
    </div>
  )
}

export default BookmarkPopup
