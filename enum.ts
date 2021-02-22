enum ResponsesType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN};


interface APIResponse<T> {
  status: number;
  type: ResponsesType;
  data: T;
}

const response: APIResponse<string> = {
  status: 200,
  type: ResponsesType.SUCCESS,
  data: 'test'
}

console.log(response);
