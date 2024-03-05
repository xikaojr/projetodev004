// export const colocaTudoParaMinusculo = (param: string) => {
//   return param.toLocaleLowerCase();
// }
// export const colocaTudoParaMaiusculo = (param: string) => {
//   return param.toLocaleUpperCase();
// }

export const converterParaMaiusculoOuMinisculo = (param: string, paraq: string) => {
  if (paraq === 'L')
    return param.toLocaleLowerCase();
  return param.toLocaleUpperCase();
}