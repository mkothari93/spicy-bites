async function newFormHandler(event) {
  event.preventDefault();

  const recipe_name = document.querySelector('input[name="newrecipe-name"]').value.trim();
  const recipe_body = document.querySelector('textarea[name="newrecipe-body"]').value.trim();
  const fileField = document.querySelector('input[type="file"]');
  const formData = new FormData();

  formData.append('recipe_photo', fileField.files[0]);
  const upload = await fetch('/api/upload/single', {
      method: 'POST',
      body: formData,
  })

  const data = await upload.json()
  console.log(data);
  const filename = data.pathname

  if(recipe_name && recipe_body) {
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
  } else {
    alert('Please enter the recipe title and instructions before creating a post.')
  }
}  
document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
