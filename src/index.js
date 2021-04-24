const log = (msg, color = "", background = "", fontSize = "") => {
  console.log(`%c${msg} `, `background: ${background}; color: ${color};  font-size: ${fontSize}px; padding: 2.74px; border-radius: 3.74px`);
};

const success = (msg, fontSize = "") => {
  console.log(`%c${msg} `, `background: #5cb85c; color: white;  font-size: ${fontSize}px; padding: 2.74px; border-radius: 3.74px`);
};

const info = (msg, fontSize = "") => {
  console.log(`%c${msg} `, `background: #5bc0de; color: white;  font-size: ${fontSize}px; padding: 2.74px; border-radius: 3.74px`);
};

const warning = (msg, fontSize = "") => {
  console.log(`%c${msg} `, `background: #f0ad4e; color: white;  font-size: ${fontSize}px; padding: 2.74px; border-radius: 3.74px`);
};

const danger = (msg, fontSize = "") => {
  console.log(`%c${msg} `, `background: #d9534f; color: white;  font-size: ${fontSize}px; padding: 2.74px; border-radius: 3.74px`);
};

module.exports = {
  log,
  success,
  info,
  warning,
  danger
};
