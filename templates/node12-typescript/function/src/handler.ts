interface Result {
  request: string;
  message: string;
}

const handler = async (event): Promise<Result> => {
  const result = {
    request: `Received input: ${JSON.stringify(event.body)}`,
    message: 'Hello world!',
  };
  return result;
};

export default handler;
