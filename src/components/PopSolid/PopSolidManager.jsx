// NotificationManager.jsx
import { createContext, createSignal, For, Show, useContext } from 'solid-js';
import Toast from './Toast';
import Modal from './Modal';

// Create a context to manage toast functionality globally
const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

export default function PopSolidManager (props) {
  const [toasts, setToasts] = createSignal([]);
  const [modals, setModals] = createSignal([]);

  const addToast = (type="info" ,message="Hello", duration=3570) => {
    const id = Date.now();
    setToasts((prev) => [
      ...prev,
      { id, type, message, duration },
    ]);

    setTimeout(() => {
        removeToast(id);
      }, duration);
  };

  

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

//   const addModal = (title, message) => {
//     setModals((prev) => [
//       ...prev,
//       { id: Date.now(), title, message },
//     ]);
//   };

//   const removeModal = (id) => {
//     setModals((prev) => prev.filter((modal) => modal.id !== id));
//   };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {/* Render Toasts */}
      {props.children}
      <div class='fixed top-0 right-0 p-3 z-50'>
        <For each={toasts()}>
            {(toast) => (
                <Toast
                    key={toast.id}
                    id={toast.id}
                    status={toast.type}
                    message={toast.message}
                    onClose={removeToast}
                />
            )}
        </For>
      </div>

      {/* Render Modals */}
      {/* {modals().map((modal) => (
        <Modal
          key={modal.id}
          id={modal.id}
          title={modal.title}
          message={modal.message}
          onClose={removeModal}
        />
      ))} */}
      {/* <Show when={modal} >
        <Modal
          title={modal.title}
          message={modal.message}
        />
      </Show> */}
    </ToastContext.Provider>
  );
};