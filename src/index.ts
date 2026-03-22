import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  // Example: read env coming from SSM / config
  const version = process.env.SERVICE_VERSION ?? "dev";

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      message: "Hello from TS Lambda with layer",
      version,
      input: event,
    }),
  };
};
