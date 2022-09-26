function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('send').addEventListener('click', (event) => {
  let element_user_comment = document.getElementById('user_comment');
  let new_input = document.createElement('input');
  new_input.innerText = getNumberOrString(document.getElementById('name').value);

  element_user_comment.appendChild(new_input);
  let element_cm_area = document.getElementById('cm_area');
  element_cm_area.innerText = getNumberOrString(document.getElementById('cm_area').value);

});
