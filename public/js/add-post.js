async function newFormHandler(event) {
  event.preventDefault();

  const recipe_name = document
    .querySelector('input[name="newrecipe-name"]')
    .value.trim();
  const recipe_body = document
    .querySelector('textarea[name="newrecipe-body"]')
    .value.trim();
  const filename = document
    .querySelector('input[name="filename"]')
    .value.trim();

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      recipe_name,
      recipe_body,
      filename
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
