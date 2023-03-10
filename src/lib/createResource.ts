const createResource = <T>(promise: Promise<T>) => {
  let status = 'pending';
  let result: T;

  const spender = promise
    .then((data) => {
      status = 'success';
      result = data;
    })
    .catch((error) => {
      status = 'error';
      result = error;
    });

  return {
    read() {
      if (status === 'pending') throw spender;
      else if (status === 'error') throw result;
      else if (!result) throw new Error();
      return result;
    },
  };
};

export default createResource;
