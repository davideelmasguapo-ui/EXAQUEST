/* COSTO DE VIDA (cada 1 minuto) */
setInterval(()=>{
  if(carcel) return;
  deuda += ortos * 0.20;  // 20% del dinero se suma a la deuda
  alerta.innerText = "💸 Costo de vida cobrado 20% de tu dinero!";
  actualizar();
  setTimeout(()=>{alerta.innerText="";},5000);
},60000); // cada 60.000 ms = 1 minuto