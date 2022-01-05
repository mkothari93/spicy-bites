async function newFormHandler(event) {
  event.preventDefault();

  const recipe_title = document.querySelector(
    'input[name="recipe-title"]'
  ).value;
  const recipe_body = document.querySelector(
    'textarea[name="recipe-body"]'
  ).value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      recipe_title,
      recipe_body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
