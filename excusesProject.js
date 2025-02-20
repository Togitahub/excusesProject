function onload() {
  function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let who = ["Mi tio", "Mi abuela", "La maestra", "La vecina"];
  let action = ["boto", "perdio", "reviso", "quebro"];
  let what = ["mi cartera", "las llaves", "el examen", "la ventana"];
  let when = ["en la tarde", "ayer", "hace uuu", "la semana pasada"];

  return `${randomElement(who)} ${randomElement(action)} ${randomElement(
    what
  )} ${randomElement(when)}`;
}

document.getElementById("excuse").innerHTML = onload();
