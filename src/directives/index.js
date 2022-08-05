export const imgError = {
  inserted: function (el, { value }) {
    el.onerror = function () {
      el.src = value;
    };
  },
};
