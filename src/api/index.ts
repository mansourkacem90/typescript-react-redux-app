export const Fetchposts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  }).then((res: any) => {
    if (res.error) throw new Error(res.error);
    else return res.json();
  });
};
