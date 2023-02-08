interface Response {
  message: string[];
  success: boolean;
}

export const api = {
  fetch: (text: string) =>
    fetch(`https://dog.ceo/api/breed/${text}/images`)
      .then((response) => response.json())
      .then((response: Response) => response),
};
