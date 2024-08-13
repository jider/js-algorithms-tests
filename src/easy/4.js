/*
Tenemnos una aplicación de prestamos sin cuotas por movimiento ni intereses. Se quiere probar una nueva modalidad de pagos en los prestamos,
donde el el primer día del préstamo la persona deba pagar solo 1€ y cada día que pasa el doble del día anterior.
El último día solo deberá pagar el restante.

Se quiere conocer la cantidad de días que requiere pagar la totalidad de una deuda, dada la cantidad a prestar inicialmente.
Dado un número N deberás deberás devolver un entero indicando la cantidad de días necesario para resolverlo.

Descripción:
La función recibe la lista de deudas y debe devolver una lista que representa el num. de días para pagar cada deuda
*/

export function daysPerDebts (debts) {
  return debts.map(debt => daysPerDebt(debt))
}
export function daysPerDebt (debt) {
  let days = 0; let prevPay = 1

  while (debt > 0) {
    days++
    debt -= prevPay
    prevPay *= 2
  }
  return days
}

export function daysPerDebtsRec (debts) {
  return debts.map(debt => {
    return daysPerDebtRec(debt, 1, 0)
  })
}
export function daysPerDebtRec (debt, prevPay, days) {
  if (debt <= 0) return days
  return daysPerDebtRec(debt - prevPay, prevPay * 2, ++days)
}
