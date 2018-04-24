// Calcule l'age de la personne en fonction de sa date de naissance
export function age (birthdate) {
  /* let [ day, month, year ] = birthdate.split('/')
  let dateTime = new Date(year, month, day).getTime() */
  let dateTime = new Date(birthdate);
  return Math.floor(
    (Date.now() - dateTime) / (365.25 * 24 * 60 * 60 * 1000)
  )
}

// Transforme une date au format US standard (yyyy-mm-dd) au format Français (dd/mm/yyyy)
export function dateFr (date) {
  let [ year, month, day ] = date.split('-')
  return `${day}/${month}/${year}`;
}

// Tronque et ajoute des '...' à la fin d'une valeur si elle dépasse `limit`
export function trim (val, limit = 10) {
  if (val.length <= limit) return val;

  return val.slice(0, limit-3) + '...';
}
