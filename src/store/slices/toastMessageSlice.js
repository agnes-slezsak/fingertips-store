export const createToastMessageSlice = (set, get) => ({
  toasts: [],
  addToast: (message) => {
    const id = Date.now();
    const newToast = { id, message };
    set((state) => ({ toasts: [...state.toasts, newToast] }));

    setTimeout(() => {
      get().removeToast(id);
    }, 2000);
  },

  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
});
