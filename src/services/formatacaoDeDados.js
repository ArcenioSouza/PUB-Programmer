export function formataCPF(cpf){
   let strCpf = String(cpf)
   strCpf = strCpf.replace(/[^\d]/g, "");
   return strCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function formataReais(valor){
   return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}