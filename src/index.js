const log = (msg, color = "", background = "", fontSize = "") => {
  console.log(`%c${msg} `, `background: ${background}; color: ${color};  font-size: ${fontSize}px; padding: 2.74px; border-radius: 3.74px`);
};


module.exports = {
  log,
};
