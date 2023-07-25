export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function addUp() {
  return ' is okay';
}

export function taskNext() {
  let join = 'But sometimes let';
  join += addUp();

  return join;
}
