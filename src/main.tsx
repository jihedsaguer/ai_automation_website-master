import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
    CheckBadgeIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import {Toaster} from "sonner";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Toaster
          visibleToasts={10}
          richColors={true}
          toastOptions={{
              classNames: {
                  success: "toast-success toast-common",
                  error: "toast-error toast-common",
                  warning: "toast-warning toast-common",
                  info: "toast-info toast-common",
              },
          }}
          icons={{
              success: <CheckBadgeIcon className="w-6 h-6" />,
              info: <InformationCircleIcon className="w-6 h-6" />,
              warning: <ExclamationCircleIcon className="w-6 h-6" />,
              error: <ExclamationTriangleIcon className="w-6 h-6" />,
              loading: <MagnifyingGlassCircleIcon className="w-6 h-6" />,
          }}
      />
    <App />
  </StrictMode>,
)
