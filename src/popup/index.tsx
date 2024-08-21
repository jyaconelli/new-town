import './index.css'

import BookmarkPopup from './Popup'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <BookmarkPopup />
  </React.StrictMode>,
)
