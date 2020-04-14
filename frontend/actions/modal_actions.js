export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (component, data) => ({
  type: OPEN_MODAL,
  component,
  data
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})