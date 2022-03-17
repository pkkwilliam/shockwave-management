export const onModalFormVisibleChange = (parentPageVisibleChange, form, visible) => {
  if (!visible) {
    form.resetFields();
  }
  parentPageVisibleChange(visible);
};
