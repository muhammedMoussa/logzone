const useLogzone = () => {
  const log = (msg) => {
    console.log(msg);
  };

  return [log];
};

export default useLogzone;
