// NotificationManager.jsx
import { createContext, createSignal, For, useContext } from 'solid-js';
import Toast from './Toast';
// import Modal from './Modal';

// Create a context to manage toast functionality globally
// const ToastContext = createContext();
const PopSolidContext = createContext();

export function usePopSolid() {
  return useContext(PopSolidContext);
}

export default function PopSolidManager (props) {
  const [toasts, setToasts] = createSignal([]);
  // const [modal, setModal] = createSignal(null);

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

  // const addModal = (type='info', title = 'hello', message = 'classwix') => {
  //   console.log(modal())
  //   setModal({ type, title, message });
  // };  

  // const removeModal = () => {
  //   setModal(null);
  // };

  return (
    <PopSolidContext.Provider value={{ addToast }}>

      {/* Render Modals */}
      {/* <Show when={modal()} >
        <Modal
          type={modal().type}
          title={modal().title}
          message={modal().message}
          onClose={removeModal}
        />
      </Show> */}

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
    </PopSolidContext.Provider>
  );
};