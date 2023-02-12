export async function handleResponse(response: any, showError?: boolean) {
  if (
    response.status === 200 ||
    response.status === 201 ||
    response.status === 204
  ) {
    return response.data;
  }
  if (response.status === 400) {
    throw new Error("server error");
  }

  throw new Error("Network response was not ok.");
}


// Error Handler. In a prod app, would likely call an error logging service.
export function handleError(error: any) {
  console.error(`API call failed. ${error}`);
}
