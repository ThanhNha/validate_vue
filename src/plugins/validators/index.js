export function onlyNumber($event) {
  let keyCode = $event.keyCode ? $event.keyCode : $event.which;
  if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
    $event.preventDefault();
  }
}
// export function handlePhone($event) {
//   var x = $event.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
//   $event.target.value = !x[2] ? x[1] : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
// }
export function handlePhone(value) {
  var reg = /^0+/gi;
  //   if (this.value.match(reg)) {
  //     this.value = this.value.replace(reg, "");
  //   }
  return value.match(reg) ? true : false;
}
