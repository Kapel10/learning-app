import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './page/main'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<>Loading ...</>}>
        <Main />
      </Suspense>
    ),
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
