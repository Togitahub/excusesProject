function onload() {
  let who = ["Mi tio", "Mi abuela", "La maestra", "La vecina"];
  let action = ["boto", "perdio", "reviso", "quebro"];
  let what = ["mi cartera", "las llaves", "el examen", "la ventana"];
  let when = ["en la tarde", "ayer", "hace uuu", "la semana pasada"];

  return (
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)]
  );
}

document.getElementById("excuse").innerHTML = onload();
